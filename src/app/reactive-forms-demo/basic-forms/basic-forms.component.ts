import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-basic-forms',
  templateUrl: './basic-forms.component.html',
  styleUrls: ['./basic-forms.component.scss']
})
export class BasicFormsComponent implements OnInit{

  myForm: FormGroup;


  constructor(private fb:FormBuilder){
    this.myForm = this.fb.group({
      email:'',
      message:'',
      career:''
    })
  }

  ngOnInit(){
    this.myForm.valueChanges.subscribe(console.log)
  }

}
