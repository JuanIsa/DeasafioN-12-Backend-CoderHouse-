import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Products } from 'src/app/interfaces/products';
import { AuthService } from 'src/app/services/auth.service';
import { FecthproductsService } from 'src/app/services/fecthproducts.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'front-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    constructor(private auths: AuthService, private dataProductsSvs: FecthproductsService, private router: Router, private loginService: LoginService, private guardservice: AuthGuard) { }
    public administrador: boolean | undefined;
    public listOfProducts: Products[] = [];
    public userLoged: string = '';

    ngOnInit(): void {
        this.administrador = this.auths.administrador;
        
        this.userLoged = this.loginService.user;
        this.loadProducts();
        this.loginService.checkSession().subscribe({
            next: data => {
                if (data['status'] === 400) {
                    this.guardservice.setterAccessFalse()
                    this.router.navigate(['auth/login']);
                }
            },
            error: e => console.log(e)
        });

    }

    public loadProducts() {
        this.dataProductsSvs.getProducts().subscribe({
            next: (data) => {
                this.listOfProducts = data;
            },
            error: (error) => console.log(error)
        })
    }

    goCart() {
        this.router.navigate(['home/carrito']);
    }
    userSelect() {
        this.auths.administrador = !this.auths.administrador;
        this.administrador = this.auths.administrador;
    }
    closeSession() {
        this.loginService.closeSession().subscribe({
            next: data => {
                if (data['status'] === 400) {
                    alert('Hasta luego ' + this.userLoged);
                    setTimeout(() => { 
                        this.guardservice.setterAccessFalse()
                        this.router.navigate(['auth/login']);
                    }, 2000);
                }
            },
            error: e => console.log(e)
        });
    }
}
