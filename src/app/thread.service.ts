import { Injectable } from '@angular/core';
import { Thread } from './thread.model';
import { THREADS } from './mock-threads';

@Injectable()
export class ThreadService {

  constructor() { }

  getThreads() {
    return THREADS;
  }

  getThreadById(threadId: number) {
    for (let thread in THREADS) {
      if (THREADS[thread].id === threadId) {
        return THREADS[thread];
      }
    }
  }

}
