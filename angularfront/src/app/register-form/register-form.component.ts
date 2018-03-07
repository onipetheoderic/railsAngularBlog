import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {
	signUpUser = {
		email: '',
		password: '',
		passwordConfirmation: ''
	};

	@Output() onFormResult = new EventEmitter<any>();

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
/* This onSignUpsubmit method subscribes to the registerAccount method we created in the authService */
  onSignUpSubmit() {
  	this.authService.registerAccount(this.signUpUser).subscribe(
  		(res) =>{
  			if (res.status==200){
  				this.onFormResult.emit({signedUp: true, res})

  			}

  		},
  		(err) => {
  			console.log("This is the error incurred on trying to login to the site", err.json());
  			this.onFormResult.emit({signedUp: false, err})

  		}
  		)

  }

}
