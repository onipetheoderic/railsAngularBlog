import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog-service/blog.service';
import { Post } from '../models/blog';
import {Angular2TokenService, UserData } from "angular2-token";
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
//lets create an array property where we are going to store the posts

posts: Post[];
// userData = {
// 	id: '',
// 	title: '',
// 	body: '',
// 	user: {
// 		uid: '',
// 		id: 0,
// 		name: '',
// 		nickname: '',
// 		email: ''		
// 	}
// }

showForm$:Subject<boolean> = new Subject();

  constructor(public authTokenService:Angular2TokenService,
  				private blogService: BlogService,
  				private location: Location,
  				public authService: AuthService) { }

args = {title:'', body:'', user_id:0}
 getPostsFromService(){
  	this.blogService.getPosts().subscribe(movieCollector => this.posts = movieCollector);
  }

delete(movieId: number): void {
  	this.blogService.deletePost(movieId).subscribe(_ => {
  		this.posts = this.posts.filter(eachMovie => eachMovie.id !== movieId)
  	});
  }



 goback(): void{
  	this.location.back();
 }

add(title:string, body:string): void {
	title = title.trim()
	//lets convert the releaseYear to number by using the Number.isNaN to do it
	if (!title || !body){
		alert('There Must be a title and a Body');
		return;//return nothing
	}
	const newPost: Post = new Post(); //we now create a new movie instance object
	//we define the variable in the object to be equals to the incoming one from the template
	newPost.title = title;
	newPost.body = body;
	newPost.user_id = this.authTokenService.currentUserData.id;

	
	console.log(newPost);
this.blogService.addPost(newPost).subscribe(insertedMovie => {this.posts.push(insertedMovie)});

}

  ngOnInit() {
  	this.getPostsFromService();
    
  }

 
  
}
