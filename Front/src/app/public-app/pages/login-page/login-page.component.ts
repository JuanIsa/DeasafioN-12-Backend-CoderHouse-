import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { AuthGuard } from 'src/app/guards/auth.guard';

@Component({
    selector: 'front-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
    constructor(private router: Router, private loginService: LoginService, private guardservice: AuthGuard) { }
    public loginForm: FormGroup = new FormGroup({});
    ngOnInit(): void {
        this.loginService.checkSession().subscribe({
            next: data => {
                if (data['status'] === 200) {
                    this.guardservice.setterAccessTrue()
                    this.router.navigate(['home']);
                    this.loginService.user = data['user'].email;
                }
            },
            error: e => console.log(e)
        });

        this.loginForm = new FormGroup(
            {
                email: new FormControl('', [Validators.required]),
                password: new FormControl('', [Validators.required])
            }
        )

    }
    login() {
        if (this.loginForm.get('email')?.errors?.['required'] || this.loginForm.get('password')?.errors?.['required']) {
            alert('Ningún campo puede estar vacío.');
        } else {
            this.loginService.loginUser(this.loginForm.value).subscribe({
                next: data => {
                    if (data !== null) {
                        this.guardservice.setterAccessTrue();
                        this.router.navigate(['home']);
                        this.loginService.user = data;
                    } else {
                        alert('Credenciales inválidas.')
                    }
                },
                error: e => console.log(e)
            })
        }
    }
    goRegister() {
        this.router.navigate(['/auth/register']);
    }
}
