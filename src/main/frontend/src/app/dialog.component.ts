import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {TweetService} from './tweet.service';



@Component({
  selector: 'dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent{
  public message:string;
  public id: string;
  public text: string;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>, public tweetService:TweetService) { }

  ngOnInit() {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  delete(){
    this.tweetService.deleteTweets(this.id).subscribe(
      data => {
       
         console.log("this.id" + this.id);
         this.dialogRef.close();
         this.dialogRef.afterClosed().subscribe(result => {

         console.log("inside afterClosed") ;
         window.location.reload();
       });
         
      },
      error => {
        console.log("error");
      });
  }
 
}


