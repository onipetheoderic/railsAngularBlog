import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
/* 
@Input is a decorator used inside of a child component, that allows data to flow from the parent component to the child component
it is used whenever a nested component wants to recieve data from the parent component
the nested component(@input) must expose a property next to an input decorator, 
the exposed propert then gets bounded to a value in the parent
this is an example syntax @Input() reviews: number;

EventEmitter is an Object that listens for something to happen and emits an event when triggered. it is similar to an
Oberver pattern, When we create an event emitter in the child component, our child component becomes a publisher,
which can be used to send data up to its parents using the emit method, the parent component now becomes a 
SUbscriber to the eventEmitter output
All EventEmitters must have a type enclosed in arrow brackets, 
*/

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.sass']
})
export class AuthDialogComponent implements OnInit {

	@Input('auth-mode') authMode: 'login' | 'register' = 'login';
	//so the authMode is going to be either Login or Register

	modalActions = new EventEmitter<string|MaterializeAction>();
	//the modalActions is an eventEmitter required by the MaterializeAction to Open or close the dialog box
	//here we are setting up an eventEmitter of type string or materialize action
	//here we are using an eventEmitter becos we want to have to state for the dialog box
	//the Openstate and the Close state, so we want one variable to do this

  constructor() { }


  onLoginFormResult(e){//we capture the event as e, and also disable reloading of page
  	if (e.signedIn){
  		this.closeDialog();
  	}
  	else {
  		alert(e.err.json().errors[0])
  	}

  }

  onRegisterFormResult(e){
  	if (e.signedUp){
  		this.closeDialog();//if it has finished signing Up close the dialoge
  	}
  	else {
  		alert(e.err.json().errors.full_messages[0])
  	}
  }
/* openDialogmethod takes a mode as its parameter, it will set the current authMode and display the dialog, 
if no parameter is passed, login will be the default.*/
//the OpenDialog is doing 2 things, to display the modalAction box, then to determine the mode.

  openDialog(mode: 'login' | 'register' = 'login'){ 
  	this.authMode = mode;//open the modal according to the mode selected
  	this.modalActions.emit({action:"modal", params:['open']});
  }
//the closedialog method is the second state of this event emitter, that emits a modal action which closes the modal
  closeDialog(){
  	this.modalActions.emit({action:"modal", params:['close']});
  }

/* isLoginMode and isRegisterMode methods will help us to display the login or register forms conditionally.*/
//this is the Checker function, to check if its current state is login or register
//it returns true if the current state is login, also returns true if the current state is register
isLoginMode(){
	return this.authMode == 'login';
}
isRegisterMode(){
	return this.authMode == 'register';
}


  ngOnInit() {
  }

}
