import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { Angular2TokenService } from 'angular2-token';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from "./guards/auth.guard";
import { AuthService } from './service/auth.service';
import { PostsComponent } from './posts/posts.component';
import { BlogService } from './blog-service/blog.service';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostSearchComponent } from './post-search/post-search.component';
import { PostsearchComponent } from './postsearch/postsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent,
    PostsComponent,
    PostDetailComponent,
    PostSearchComponent,
    PostsearchComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    MaterializeModule,
    FormsModule
  ],
  providers: [Angular2TokenService, AuthService, AuthGuard, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
