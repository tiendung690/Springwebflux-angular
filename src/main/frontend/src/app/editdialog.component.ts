import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {TweetService} from './tweet.service';



@Component({
  selector: 'editdialog-component',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})

export class EditDialogComponent{
  public message:string;
  public id: string;
  public text: string;
  enableButton= false;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>, public tweetService:TweetService) { }

  ngOnInit() {

  }
  checkLenght(){
    
    console.log("this.text"+ this.text);
    if(this.text != null && this.text != ""){
    console.log("dis"+ this.enableButton);
     this.enableButton =true; 
    }else{
      console.log("this.textdd"+ this.text);
      this.enableButton =false; 
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  uptade(){
    this.tweetService.updateTweet(this.id,this.text).subscribe(
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


