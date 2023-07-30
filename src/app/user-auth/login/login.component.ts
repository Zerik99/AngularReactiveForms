import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
title = 'Angular Reactive Form'

loginForm= new FormGroup({
  user: new FormControl(''),
  password: new FormControl('')
})
loginUser(){
  console.warn(this.loginForm.value)
}


}
