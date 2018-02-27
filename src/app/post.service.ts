import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Post } from './post.model';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;
  threads: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
    this.threads = database.list('threads');
  }

  getAllPosts() {
    return this.posts;
  }

  getPostById() {
    return this.database.object('posts/-L6JNvopXJ3LWcoFTjJK');
  }



  getPostsByThreadId(threadId: string) {
    // console.log(this.database.object('threads/' + threadId));

    let testPost = this.getPostById();
    // console.log(this.database.object('posts/L6JNvopXJ3LWcoFTjJK' + '/threadId/'));

    return this.database.object('posts/-L6JNvopXJ3LWcoFTjJK');
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
  }
}
