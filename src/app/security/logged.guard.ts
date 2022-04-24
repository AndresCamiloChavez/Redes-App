import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}
  canActivate(){
    if(this.authService.userData){
      return true;
      
    }else{
      this.router.navigate(['login'])
      return false
    }
  }
  
}
