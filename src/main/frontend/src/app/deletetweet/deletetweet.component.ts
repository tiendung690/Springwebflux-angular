import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'; 
import {DialogComponent} from './../dialog.component';


@Component({
  selector: 'app-deletetweet',
  templateUrl: './deletetweet.component.html',
  styleUrls: ['./deletetweet.component.css']
})
export class DeletetweetComponent implements OnInit {

  @Input() id: string;
  @Input() text: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(id:string,text:string): void {
    console.log("this.id "+id);
    console.log("text "+ text);
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: { id: this.id , text : this.text}
    });

    dialogRef.componentInstance.text = this.text;
    dialogRef.componentInstance.id = this.id;
  
  
 
  }

}
