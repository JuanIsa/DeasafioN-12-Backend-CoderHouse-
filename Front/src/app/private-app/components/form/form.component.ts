import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FecthproductsService } from 'src/app/services/fecthproducts.service';

@Component({
  selector: 'front-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private authsvc:AuthService, private productsvc:FecthproductsService) { }
  public formProduct: FormGroup = new FormGroup({});
  
  ngOnInit(): void {
    this.formProduct = new FormGroup(
      {
        nombre: new FormControl('', [Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        codigo: new FormControl('', [Validators.required]),
        foto: new FormControl('', [Validators.required]),
        precio: new FormControl('', [Validators.required]),
        stock: new FormControl('', [Validators.required])
      }
    )
  }
  addprodcut(): void {
    if (
      this.formProduct.get('nombre')?.errors?.['required'] ||
      this.formProduct.get('descripcion')?.errors?.['required'] ||
      this.formProduct.get('codigo')?.errors?.['required'] ||
      this.formProduct.get('foto')?.errors?.['required'] ||
      this.formProduct.get('precio')?.errors?.['required'] ||
      this.formProduct.get('stock')?.errors?.['required'] 
    ) {
      alert('Todos los campos deben estar completos');
    } else {
      if (this.authsvc.administrador) {
        this.productsvc.addProduct(this.formProduct.value).subscribe({
          next:data=>console.log(data),
          error: error => console.log(error)
        });
      } else {
        alert('Tenés que ser administrador para agregar productos');
      }
    }
  }

}
