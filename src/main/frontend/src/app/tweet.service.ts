import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Tweet} from './entities/tweet';
import 'rxjs/add/operator/map'



@Injectable()
export class TweetService {

    public logged: boolean = false;
     public tweet:Tweet;

    constructor(private http: Http) {
     }
     getTweets() {
       
       // var params = JSON.stringify(access);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("before return");
      return this.http.get('http://localhost:8080/tweets', options)
            .map((response: Response) => {
                 let res = <Tweet[]> response.json();
                 console.log("after return");
                 console.log("res"+ res);
                 return res;
            });
    }
    deleteTweets(id:string) {
       
       var params = JSON.stringify(id);
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });
       console.log("before return");
     return this.http.delete('http://localhost:8080/tweets' + "/" + id)
           .map((response: Response) => {
                console.log("res"+ response);
                return response;
           });
   }

   updateTweet(id:string, text:string) {
    console.log("id"+ id);
    console.log("text"+text);
    this.tweet = new Tweet(); 
    this.tweet.id = id;
    this.tweet.text = text;
    this.tweet.createdAt = new Date();
    var params = JSON.stringify(this.tweet);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("before return");
  return this.http.put('http://localhost:8080/tweets' + "/" + id, params, options)
        .map((response: Response) => {
             console.log("res"+ response);
             return response;
        });
}

createTweet(id:string, text:string) {
  console.log("id"+ id);
  console.log("text"+text);
  this.tweet = new Tweet(); 
  //this.tweet.id = id;
  this.tweet.text = text;
  this.tweet.createdAt = new Date();
  var params = JSON.stringify(this.tweet);
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  console.log("before return");
return this.http.post('http://localhost:8080/tweets' ,  params, options)
      .map((response: Response) => {
           console.log("res"+ response);
           return response;
      });
}



    



}
