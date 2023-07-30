
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BasicFormsComponent } from './basic-forms/basic-forms.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from'@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'
import { MatDividerModule } from '@angular/material/divider';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { MatCardModule } from '@angular/material/card';
import { ValidFormComponent } from './valid-form/valid-form.component';







@NgModule({
  declarations: [
    ReactiveformComponent,
    BasicFormsComponent,
    NestedFormComponent,
    DynamicFormComponent,
    ValidFormComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule
  ],
  exports: [
    ReactiveformComponent,
    BasicFormsComponent,
    NestedFormComponent,
    DynamicFormComponent,
    ValidFormComponent

  ]
})
export class ReactiveFormsDemoModule { }
