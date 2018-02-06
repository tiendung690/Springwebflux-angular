import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewtweetComponent} from './newtweet.component';
import {MatButtonToggleModule, MatButtonModule
  , MatFormFieldModule
  , MatInputModule } from '@angular/material';
import { NewDialogComponent } from '../newdialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonToggleModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
    
    
  ],
  exports: [NewDialogComponent,NewtweetComponent],
  declarations: [NewDialogComponent,NewtweetComponent]
})
export class NewtweetModule { }
