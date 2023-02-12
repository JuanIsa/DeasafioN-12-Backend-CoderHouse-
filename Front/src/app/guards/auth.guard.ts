import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  private access: boolean = false;
  
  setterAccessTrue() {
    this.access = true;
  }
  setterAccessFalse() {
    this.access = false;
  }

  getterAcces() {
    return this.access;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.access) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
  }
  
}
