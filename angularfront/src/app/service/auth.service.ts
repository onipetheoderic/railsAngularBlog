import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

import 'rxjs/add/operator/map';

/* 
A Subject is like an Observable with the observer wrapped into One. In the Observable we use the Observer to Emit some data to 
the Observable, the Subject is capable of getting changed anytime, an example of how to use it is

let mySubject = new Subject();
mySubject.subscribe(data) => console.log(data);

mySubject.next("hello");
*/

/* An Observable allows us to do something asynchronously, it is all about reactive programming,
so an Observable MUST return a new Observable, so it cant be void,
MAP operator, what the map operator allows us to do is to modify the data comming in from the observable created,
since we are going to be getting a JSON response from the Observable, to the map function, so we create another
parameter to accept or take a JSON response and Map it to the javascript Object, which would be much easier for
us to work with.
*/

@Injectable()
export class AuthService {

userSignedIn$:Subject<boolean> = new Subject();
  constructor(public authService: Angular2TokenService) { //lets create an Instance of the angular 2 token here
//lets validate if the user is logged In with a valid token or not
//so lets call the validateToken method of the Angular2TokenService
	this.authService.validateToken().subscribe(
		res => res.status == 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false))
  }
  /* So we can use success key to determine whether the user is logged in with a valid token or not
that is if the response(res) has a json status of 200 then change the Subject userSignedIn to SUCCESS
else if the response is not 200 change the userSignedIn to FALSE
*/
  /*Our logOutUser() method takes no params and returns an Observable of Response, 
we’ll call signOut() on Angular2TokenService, but before returning its response, 
we’ll map though it to change userSignedIn$ value to false in order to notify our observers that user successfully logged out,
 and then return the response to whomever is observing the result of logOutUser() method .*/
 //So the STEPS TO AN OBSERVABLE APPROACH IS:
 //1. CREATE, 2. COMBINE(using the map) 3. LISTEN(by subscribing to the observable)
 //here we have created and Combineed, lets now go our login and register and profile pages to listen to each of these
 //observable
logOutUser(): Observable<Response> {
	return this.authService.signOut().map(
		res => {
			this.userSignedIn$.next(false);
			return res;
		}

	);
}
toolBarValidator(){
	this.authService.validateToken().subscribe(
		res => res.status == 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false))
}

registerAccount(signUpData: {email:string, password:string, passwordConfirmation:string}):Observable<Response> {
	return this.authService.registerAccount(signUpData).map(
		res =>{
			this.userSignedIn$.next(true);
			return res;
		})

}

logInUser(signInData: {email:string, password:string}):Observable<Response> {
	return this.authService.signIn(signInData).map(
		res => {
			this.userSignedIn$.next(true);
			return res;
		})
}


deleteAccount(): Observable<Response> {
	return this.authService.deleteAccount().map(
		res => {
			this.userSignedIn$.next(false);
			return res;
		},
		err => {
			console.log("error in Deleting:", err);
		})
}
}

//we generated this using ng g s service/auth