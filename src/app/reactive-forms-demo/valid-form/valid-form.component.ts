import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.scss']
})
export class ValidFormComponent implements OnInit{

  myForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.myForm = this.fb.group({
      email: ['',[
        Validators.required,
        Validators.email,
      ]],
      password: ['',[
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{5,}$'),
        Validators.minLength(5)
      ]],
      age: [null, [
        Validators.required,
        Validators.min(13),
        Validators.max(119)
      ]],
      agree:[false,[
        Validators.requiredTrue
      ]]
    })
  }

  ngOnInit(){
  }

  get email(){
    return this.myForm.get('email');
  }

  get password(){
    return this.myForm.get('password');
  }

  get age(){
    return this.myForm.get('age');
  }

  get agree(){
    return this.myForm.get('agree');
  }

}
