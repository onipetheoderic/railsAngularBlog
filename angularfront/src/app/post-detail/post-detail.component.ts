import { Component, OnInit, Input} from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../blog-service/blog.service';
import { Post } from '../models/blog';
import {Angular2TokenService} from "angular2-token";
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {

@Input() post: Post;//we are binding 2 components together
//I believe the this component is connected to the parent component by the routerLink in the post.component.html
showAdminTask$:Subject<boolean> = new Subject();

  constructor(
  	private route: ActivatedRoute,
  	private blogService: BlogService,
  	private location: Location,
  	public authTokenService: Angular2TokenService,
  	public authService: AuthService
  	) { }


	getPostFromRoute(){//this would inject the movie from the route
  	//we use the route parameter mapper to seperate the id from the route itself and store it in the const id variable
  	const id = +this.route.snapshot.paramMap.get('id');//the +sign will convert the string to number, just like parseInt in jquery
  	console.log(`this.routes.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`)

  	//we extract the id and then parse it to the service method
  	this.blogService.getPostFromId(id).subscribe(post => this.post = post);
  	//we parse the result gotten from the getPostFromId to the Input Post 
	}


	goback(): void{
  	this.location.back();
  	}

  	save(): void {
  	//we are not expecting anything here so we just subscript to an empty output and redirect to the homepage
  	this.blogService.updatePost(this.post).subscribe(() => this.goback());
  	//after saving it should go back to the homepage
 	}

 	delete(eachPostId: number): void {
  	this.blogService.deletePost(eachPostId).subscribe(() => this.goback());
    }

   
	ngOnInit() {
		this.getPostFromRoute();
		this.authService.toolBarValidator();
		
	}

}
