import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;
  constructor(
    private router: Router,
    private auth: AngularFireAuth,
    private toastCtrl: ToastController
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }
  buildForm(){
    this.form = new FormGroup({
      username: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
    });
  }
  onRegister(){
    this.auth.createUserWithEmailAndPassword(this.form.get('email').value, this.form.get('password').value).then(data =>{
      this.presentToast();
    });
  }
  onNavigateToLogin(){
    this.router.navigate(['login']);
  }
  async presentToast(){
    const toast = await this.toastCtrl.create({
      header: 'Usuario creado',
      message: 'Excelente se creo el usuario',
    });
    await toast.present();
  }

}
