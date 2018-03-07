import { Injectable } from '@angular/core';
import { Post } from '../models/blog';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap, catchError } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-type': 'application/json' })
};


@Injectable()
export class BlogService {

private blogUrl = "http://127.0.0.1:3000/posts";
  constructor(private http: HttpClient) { }

	getPosts(): Observable<Post[]> {
	return this.http.get<Post[]>(this.blogUrl).pipe(//the pipe transfers the output to the anonymous function called
		//recievedMovie, we now stringify it
	tap(recievedMovie => console.log(`Movies = ${JSON.stringify(recievedMovie)}`)),
	catchError(error => of([]))
		);
	}



	getPostFromId(id: number): Observable<Post> {// the server should respond with a single <Movie>, not Arrays of Movie
	//here we parse the id into the new url constant contruct
	const url = `${this.blogUrl}/${id}`;
	//here we pass an Id to it, which is a number, then tell it get the new Url with the id, cuz we are no longer working
	//with the previous moviesUrl, here we are getting and parsing the Id of a single url
	return this.http.get<Post>(url).pipe(
		tap(selectedMovie => console.log(JSON.stringify(selectedMovie))),
		catchError(error => of(new Post()))
		);
	}

	//here we are returning any object to the server, becos it is going to be formatted to Json by the Content-type
	updatePost(post: Post): Observable<any> {
	//here we parse it to the Id we want to Update
	return this.http.put(`${this.blogUrl}/${post.id}`, post, httpOptions ).pipe(
		tap(updatedMovie => console.log(JSON.stringify(updatedMovie))),
		catchError(error => of(new Post()))
		);
	}

	addPost(newPost): Observable<any> {
	return this.http.post<any>(this.blogUrl, newPost, httpOptions).pipe(
		tap(updatedMovie => console.log(JSON.stringify(updatedMovie))),
		catchError(error => of(new Post()))
		);
	}

	deletePost(postId: number): Observable<Post> {
	const url = `${this.blogUrl}/${postId}`;
	return this.http.delete<Post>(url, httpOptions).pipe(
		tap(_ => console.log(`Deleted Movie with an Id of ${postId}`)),
		catchError(error => of(null))
		);

	}

	searchPosts(typedString: string): Observable<Post[]> {
	if(!typedString.trim()) {//if nothing is typed return an empty array
		return of([]);
	}
	return this.http.get<Post[]>(`http://127.0.0.1:3000/posts/search?name=${typedString}`).pipe(
		tap(foundedPost =>console.log(`foundedMovie = ${JSON.stringify(foundedPost)}`)),
		catchError(error => of(null))
		);
	}



}
