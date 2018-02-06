import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EdittweetComponent} from './edittweet.component';
import {MatButtonToggleModule, MatButtonModule
  , MatFormFieldModule
  , MatInputModule } from '@angular/material';
import { EditDialogComponent } from '../editdialog.component';
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
  exports: [EdittweetComponent,EditDialogComponent,],
  declarations: [EdittweetComponent,EditDialogComponent]
})
export class EdittweetModule { }
