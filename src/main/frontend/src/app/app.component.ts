import { Component,ViewChild,OnInit } from '@angular/core';
import {MatPaginator, MatSort
  , MatTableDataSource,MatHeaderCell,MatCell} from '@angular/material';

import {TweetService} from './tweet.service';
import {Tweet} from './entities/tweet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns = ['created','text','delete','edit','new' ];
  dataSource: MatTableDataSource<Tweet>;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private tweetService:TweetService) {
   
    // Assign the data to the data source for the table to render
    this.tweetService.getTweets().subscribe(
      data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
         
      },
      error => {
        console.log("error");
      });
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
