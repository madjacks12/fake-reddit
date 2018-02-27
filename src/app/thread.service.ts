import { Injectable } from '@angular/core';
import { Thread } from './thread.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ThreadService {
  threads: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.threads = database.list('threads');
  }

  getThreads() {
    return this.threads;
  }

  getThreadById(threadId: string) {
    return this.database.object('threads/' + threadId);
  }

  addThread(newThread: Thread) {
    this.threads.push(newThread);
  }

}
