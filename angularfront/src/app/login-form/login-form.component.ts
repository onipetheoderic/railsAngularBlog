import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../service/auth.service';
//We imported the AuthService so that we can Subscribe to all its observable 

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
//we only decided to create this outside the method onSignInSubmit() method, just based on convention
//so we parse this in as an Argument to the logInUser service method we created earlier
	signInUser = {
		email: '',
		password: ''
	};
//since eventEmitters must have a type, we give it a type of any
	@Output() onFormResult = new EventEmitter<any>();

//@Output are used in order to create Custom Events that pass data from a nested or child component to the parent component
//or to the Outside World
//when instantiating a service inside a constructor you have to add a private or a public
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onSignInSubmit(){
  	this.authService.logInUser(this.signInUser).subscribe(
  		res => {
  			if (res.status == 200){
  				this.onFormResult.emit({signedIn: true, res});
  			}

  		},
  		err => {
  			console.log('Error on SignIn is:',err);
  			this.onFormResult.emit({signedIn: false, err});

  		}
  		);
  }

}
