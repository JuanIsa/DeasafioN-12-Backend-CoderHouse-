import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  registerUser(data: any): Observable<any> {
    return this.http.post(`${environment.urlFetch}/users/register`, data);
  }
}
