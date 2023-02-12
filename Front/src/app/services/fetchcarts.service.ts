import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FetchcartsService {

  constructor(private http: HttpClient) { }
  getProductsOnCartById(): Observable<any> {
    return this.http.get(`${environment.urlFetch}/api/carrito/1/productos`);
  }
  addProductsOnCartById(body:any): Observable<any> {
    return this.http.post(`${environment.urlFetch}/api/carrito/1/productos`, body);
  }
}
