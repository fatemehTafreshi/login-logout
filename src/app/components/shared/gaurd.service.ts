import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GaurdService implements CanActivate{

  constructor(private nav:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem( "login")!== null){
      return true;
    }
    else{
      this.nav.navigate(['']);
      return false;
    }
  }

}
