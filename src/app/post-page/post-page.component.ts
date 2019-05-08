import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  update(){
    this.posts =     [{
      userName: "hanao",
      userId: "tarotaro",
      content: "Hello World",
      postTime: "2019/3/31",
      id: 1
    },
    {
      userName: "Taro",
      userId: "tarotaro",
      content: "Hello World",
      postTime: "2019/3/31",
      id: 2
    }]
  }
  trackFn(index: any, post: any){
    return post.id;
  }
  
  posts:Post = [
    {
      userName: "Taro",
      userId: "tarotaro",
      content: "Hello World",
      postTime: "2019/3/31",
      id: 1
    },
    {
      userName: "Taro",
      userId: "tarotaro",
      content: "Hello World",
      postTime: "2019/3/31",
      id: 2
    },
    {
      userName: "TJ",
      userId: "tarotaro",
      content: "Hello World",
      postTime: "2019/3/31",
      id: 3
    }
  ]
  start = 0;
  len = 2;

  pager(page: number){
    this.start = this.len * page;
  }
}
