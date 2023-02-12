import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FecthproductsService } from 'src/app/services/fecthproducts.service';

@Component({
  selector: 'front-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private dataProductsSvs: FecthproductsService) { }
  @Input() infoProduct!: any;
  @Input() administrador!: boolean | undefined;

  public formProduct: FormGroup = new FormGroup({});
  public updateProduct: boolean = false;

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
  deleteItem() {
    this.dataProductsSvs.deleteProduct(this.infoProduct.id).subscribe({
      next: data => console.log(data),
      error: error => console.log(error)
    });
  }
  updateItem() {
    this.updateProduct = true;
  }
  
  update(): void {
    if (
      this.formProduct.get('nombre')?.errors?.['required'] ||
      this.formProduct.get('descripcion')?.errors?.['required'] ||
      this.formProduct.get('codigo')?.errors?.['required'] ||
      this.formProduct.get('foto')?.errors?.['required'] ||
      this.formProduct.get('precio')?.errors?.['required'] ||
      this.formProduct.get('stock')?.errors?.['required']
    ) {
      alert('Todos los campos deben estar completos');
      this.updateProduct = false;
    } else {
      this.dataProductsSvs.updateProduct(this.infoProduct.id, this.formProduct.value).subscribe({
        next:data=>console.log(data),
        error:error=>console.log(error)
      });
      this.updateProduct = false;
    }
}














}
