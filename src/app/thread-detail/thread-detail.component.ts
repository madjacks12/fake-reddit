import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { ThreadService } from '../thread.service';
import { PostService } from '../post.service';
import { Thread } from '../thread.model';
import { Post } from '../post.model';


@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css'],
  providers: [ThreadService, PostService]
})

export class ThreadDetailComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  threadId: string;
  post: any;
  threadToDisplay;
  postToDisplay;

  constructor(
    private route: ActivatedRoute,
    private Location: Location,
    private threadService: ThreadService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.threadId = urlParameters['id'];
    });

    this.posts = this.postService.getAllPosts();

    this.threadToDisplay = this.threadService.getThreadById(this.threadId);
    console.log(this.threadToDisplay);

    this.postToDisplay = this.postService.getPostsByThreadId(this.threadId);
    console.log(this.postToDisplay);
  }

}
