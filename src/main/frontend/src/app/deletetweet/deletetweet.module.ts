import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeletetweetComponent} from './deletetweet.component';
import {MatButtonToggleModule, MatButtonModule} from '@angular/material';
import { DialogComponent } from '../dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  exports: [DeletetweetComponent,DialogComponent],
  declarations: [DeletetweetComponent,DialogComponent]
})
export class DeletetweetModule { }
