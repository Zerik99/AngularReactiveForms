import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  myForm: FormGroup;


  constructor(private fb:FormBuilder){
    this.myForm = this.fb.group({})
  }

  ngOnInit(){
    this.myForm = this.fb.group({
      email:'',
      phones: this.fb.array([])
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

  get phoneForms(){
    return this.myForm.get('phones') as FormArray
  }

  addPhone(){

    const phone = this.fb.group({
      area:[],
      prefix:[],
      line:[],
    })

    this.phoneForms.push(phone);

  }

  deletePhone(i:number){
    this.phoneForms.removeAt(i)
  }

}
