import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { routing } from './app.routing';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PostDetailComponent,
    ThreadDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = "Fake Reddit";
 }
