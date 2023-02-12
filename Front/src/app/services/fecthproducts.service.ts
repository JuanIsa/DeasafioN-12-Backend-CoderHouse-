import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FecthproductsService {
  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<any> {
    return this.http.get(`${environment.urlFetch}/api/productos`);
  }
  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${environment.urlFetch}/api/productos/${id}`);
  }
  addProduct(product: any): Observable<any>  {
    return this.http.post(`${environment.urlFetch}/api/productos/`, product);
  }
  updateProduct(id: string, product: any): Observable<any>  {
    return this.http.put(`${environment.urlFetch}/api/productos/${id}`, product);
  }
  
  
}
