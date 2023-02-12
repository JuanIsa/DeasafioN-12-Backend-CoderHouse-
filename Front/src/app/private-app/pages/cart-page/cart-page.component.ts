import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FecthproductsService } from 'src/app/services/fecthproducts.service';
import { FetchcartsService } from 'src/app/services/fetchcarts.service';

@Component({
  selector: 'front-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  constructor(private cartSVC: FetchcartsService, private productsSVC: FecthproductsService, private router: Router) { }
  cartItems: any[] = [];
  listProducts: any[] = [];
  public product: any;
  ngOnInit(): void {
    this.cartSVC.getProductsOnCartById().subscribe({
      next: data => this.cartItems = data,
      error: error => console.log(error)
    })

    this.productsSVC.getProducts().subscribe({
      next: data => this.listProducts = data,
      error: error => console.log(error)
    })
  }
  goCart() {
    this.router.navigate(['home']);
  }
  addtocart(id: string): void {
    
    this.productsSVC.getProducts().subscribe({
      next: (data) => {
        this.cartItems.push(data.find((item: any) => item.id === id));
        this.cartSVC.addProductsOnCartById(data.find((item: any) => item.id === id)).subscribe({
          next: data => console.log(data),
          error:error=>console.log(error)
        })
      },
      error:error=>console.log(error)
    })
  }
}
