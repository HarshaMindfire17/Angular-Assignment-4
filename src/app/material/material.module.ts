import { NgModule } from '@angular/core';
import{  MatButtonModule } from '@angular/material/button';
import{  MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents=[
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatFormFieldModule
]
@NgModule({
  
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ],
  providers:[
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ]
})
export class MaterialModule { }
