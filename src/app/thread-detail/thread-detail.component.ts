import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Thread } from '../thread.model';
import { Post } from '../post.model';
import { ThreadService } from '../thread.service';
import { PostService } from '../post.service';


@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css'],
  providers: [ThreadService, PostService]
})
export class ThreadDetailComponent implements OnInit {
  threadId: number = null;
  threadToDisplay: Thread;
  postsToDisplay: Post[];

  constructor(
    private route: ActivatedRoute,
    private Location: Location,
    private threadService: ThreadService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.threadId = parseInt(urlParameters['id']);
    });

    this.threadToDisplay = this.threadService.getThreadById(this.threadId);
    this.postsToDisplay = this.postService.getPostsByThreadId(this.threadId);
  }

}
