import { Post } from './models/post1.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPost();
  }

  onCreatePost(postData: {title: string, content: string}) {
    // Send Http request
    this.http.post('https://ng-complete-guide-44983-default-rtdb.firebaseio.com/posts.json',
    postData
    ).subscribe(responseData => {
      console.log(responseData);
    });


  }

  onFetchPosts() {
    // Send Http request
    this.fetchPost();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPost(){
    this.http.get('https://ng-complete-guide-44983-default-rtdb.firebaseio.com/posts.json')
    .pipe(
      map(responseData =>{
      const postsArray = [];
      for(const key in responseData){
        if(key.hasOwnProperty[key]){
          postsArray.push({...responseData[key], id:key});
        }
      }
      return postsArray;
    })
    )
    .subscribe(posts =>{
      console.log(posts);
    });


  }
}
