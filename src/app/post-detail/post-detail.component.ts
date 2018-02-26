import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { ThreadService } from '../thread.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})

export class PostDetailComponent implements OnInit {
  threadId: number = null;
  // postId: number = null;
  postsToDisplay: Post[];

  constructor(
    private route: ActivatedRoute,
    private Location: Location,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.threadId = parseInt(urlParameters['id']);
    });
    this.postsToDisplay = this.postService.getPostsByThreadId(this.threadId);
  }
}
