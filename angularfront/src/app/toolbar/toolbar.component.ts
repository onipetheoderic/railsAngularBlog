import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
//we want to use AuthService instead of Angular2TokenService directly.
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

	@ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.toolBarValidator();
  }

  logOut(){
  	this.authService.logOutUser().subscribe(()=>this.router.navigate(['/']));//when the logout function completes 
  	//we redirect to the home
  }

  presentAuthDialog(mode?: 'login' | 'register'){//the question marks stands for Optional parameter, it can be called wihtout any parameter, and wont give an error
  	this.authDialog.openDialog(mode);//that is these have or not have a parameter thanks to the ?
  }
//thanks to the viewChild we use the opendialog method from the AuthDialogComponent
}
