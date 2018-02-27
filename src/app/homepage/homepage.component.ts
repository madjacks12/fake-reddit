import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Thread } from '../thread.model';
import { Post } from '../post.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ThreadService } from '../thread.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ThreadService]
  // providers: [PostService]
})

export class HomepageComponent implements OnInit {
  threads: FirebaseListObservable<any[]>;
  posts: Post[];

  constructor(private router: Router, private threadService: ThreadService) {}

  // constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    // this.posts = this.postService.getPosts();
    this.threads = this.threadService.getThreads();
  }

  goToDetailPage(clickedThread) {
    this.router.navigate(['threads', clickedThread.$key]);
  }

  // goToDetailPage(clickedPost: Post) {
  //   this.router.navigate(['posts', clickedPost.id]);
  // }

}
