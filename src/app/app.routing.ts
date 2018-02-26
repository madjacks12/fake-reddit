import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'threads/:id',
    component: ThreadDetailComponent
  },
  {
    path: 'threads/:id',
    component: PostDetailComponent
  } //,
  // {
  //   path: 'posts/:id',
  //   component: PostDetailComponent
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
