import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-end-test';
  posts: any[] = [];

  constructor(private postService: AppServiceService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postService.getPosts(1, 10)
      .subscribe(posts => {
        this.posts = posts;
      }, error => {
        console.error(error);
      });
  }
}
