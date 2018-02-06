import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormField, MatInputModule} from '@angular/material'; 
import {EditDialogComponent} from './../editdialog.component';


@Component({
  selector: 'app-edittweet',
  templateUrl: './edittweet.component.html',
  styleUrls: ['./edittweet.component.css']
})
export class EdittweetComponent implements OnInit {

  @Input() id: string;
  @Input() text: string;
  

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
 

  openDialog(id:string,text:string): void {
    console.log("this.id "+id);
    console.log("text "+ text);
    let dialogRef = this.dialog.open(EditDialogComponent, {
      width: '450px',
      data: { id: this.id , text : this.text}
    });

    dialogRef.componentInstance.text = this.text;
    dialogRef.componentInstance.id = this.id;
  
  
 
  }

}
