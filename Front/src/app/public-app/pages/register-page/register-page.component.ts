import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'front-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private router: Router, private registerService: RegisterService) { }
  public registerForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        repeatpassword: new FormControl('', [Validators.required]),
      }
    )
  }
  register() {
    if (this.registerForm.get('email')?.errors?.['required'] ||
      this.registerForm.get('password')?.errors?.['required'] ||
      this.registerForm.get('repeatpassword')?.errors?.['required']) {
      alert('Ningún campo puede estar vacío.');
    } else {
      if (this.registerForm.value['password'] === this.registerForm.value['repeatpassword']) {
        this.registerService.registerUser({
          email: this.registerForm.value['email'],
          password: this.registerForm.value['password']
        }).subscribe({
          next: (data) => {
            if (data['Error']) {
              alert('Ya existe ese email en la base de datos');
            }
            if (data['_id']) {
              alert(`Usuario creado con éxito con el id: ${data['_id']}`);
              this.router.navigate(['/auth/login']);
            }
          },
          error: e => alert('Ah ocurrido un error inesperado, intente nuevamente en unos instantes.')
        })
      } else {
        alert('Las contraseñas deben coincidir');
      }
    }
  }
  goLogin() {
    this.router.navigate(['/auth/login']);
  }

}
