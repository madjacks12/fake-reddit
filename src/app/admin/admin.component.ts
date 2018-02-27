import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../thread.service';
import { PostService } from '../post.service';
import { Thread } from '../thread.model';
import { Post } from '../post.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ThreadService, PostService]
})

export class AdminComponent implements OnInit {

  constructor(private threadService: ThreadService, private postService: PostService) { }

  ngOnInit() {
  }

  submitNewThreadForm(author: string, title: string, content: string) {
    let newThread: Thread = new Thread(author, title, content);
    this.threadService.addThread(newThread);
  }

  submitNewPostForm(author: string, title: string, summary: string, content: string, threadId: number) {
    let newPost: Post = new Post(author, title, summary, content, threadId);
    this.postService.addPost(newPost);
  }
}
