import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormField, MatInputModule} from '@angular/material'; 
import {NewDialogComponent} from './../newdialog.component';


@Component({
  selector: 'app-newtweet',
  templateUrl: './newtweet.component.html',
  styleUrls: ['./newtweet.component.css']
})
export class NewtweetComponent implements OnInit {

  @Input() id: string;
  @Input() text: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(id:string,text:string): void {
    console.log("this.id "+id);
    console.log("text "+ text);
    this.text ="";
    let dialogRef = this.dialog.open(NewDialogComponent, {
      width: '450px',
      data: { id: this.id , text : this.text}
    });

    dialogRef.componentInstance.text = this.text;
    dialogRef.componentInstance.id = this.id;
  
  
 
  }

}
