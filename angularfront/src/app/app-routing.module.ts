import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import {AuthGuard} from "./guards/auth.guard";
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
	{ path: '', component: PostsComponent, pathMatch: 'full'	},
	{ path: 'home', component: HomeComponent },
	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
	{ path: 'posts', component: PostsComponent },
	{ path: 'detail/:id', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
