import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog-service/blog.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Post } from '../models/blog';


@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.sass']
})
export class PostSearchComponent implements OnInit {
posts$: Observable<Post[]>
private searchedSubject = new Subject<string>();

  constructor(private blogService: BlogService) { }

  search(searchedString: string): void {
  	console.log(`searchedString = ${searchedString}`);
  	this.searchedSubject.next(searchedString);
  }

  ngOnInit() {
  	this.posts$ = this.searchedSubject.pipe(
  		debounceTime(300),
  		distinctUntilChanged(),
  		switchMap((searchedString: string) => this.blogService.searchPosts(searchedString))
  		);
  }

}
