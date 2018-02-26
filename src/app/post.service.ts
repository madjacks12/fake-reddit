import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { THREADS } from './mock-threads';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

  constructor() { }

  getPosts() {
    return POSTS;
  }

  getPostById(postId: number) {
    for (let post in POSTS) {
      if (POSTS[post].id === postId) {
        return POSTS[post];
      }
    }
  }

  getPostsByThreadId(threadId: number) {
    let allPosts = [];

    for (let thread in THREADS){
      if (THREADS[thread].id  === threadId){
        for (let post in POSTS) {
          allPosts.push(POSTS[post]);
        }
      }
      return allPosts;
    }
  }
}
