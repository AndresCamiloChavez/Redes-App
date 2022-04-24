import { Component } from '@angular/core';
import { getAuth, signOut } from 'firebase/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    
  }
  logoff(){
    this.authService.SignOut();
  }
}
