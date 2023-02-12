import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user: string='';
  
  constructor(private http: HttpClient) { }

  loginUser(data:any): Observable<any> {
    return this.http.post(`${environment.urlFetch}/users/login`,data);
  }

  checkSession(): Observable<any> {
    return this.http.get(`${environment.urlFetch}/users/checksession`);
  }  

  closeSession(): Observable<any> {
    return this.http.get(`${environment.urlFetch}/users/logout`);
  }
  
}
