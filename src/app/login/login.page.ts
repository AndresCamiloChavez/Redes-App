import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  constructor(
    private router: Router,
    private toastCtrl:ToastController,
    private authService: AuthService
  ) {
    this.form = new FormGroup({
      emailControl: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwordControl: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
    }) 

  }

  ngOnInit() {
  }
  onNavigateToRegister(){
    this.router.navigate(['register']);
  }

  loging(event: any){
    this.authService.SignIn(this.form.get("emailControl").value, this.form.get("passwordControl").value);
  }
  

}
