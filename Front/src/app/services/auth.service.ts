import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public administrador: boolean = false;
  constructor() { }
}
