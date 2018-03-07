import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {Angular2TokenService} from "angular2-token";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  constructor(public authTokenService:Angular2TokenService,
              public authService:AuthService,
              private router:Router,
              ) {}

  logOut(){
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']))
    
  }
  deleteAcc(){//built by me
    this.authService.deleteAccount().subscribe(() => this.router.navigate(['/']))
    
  }

  ngOnInit() {
  }

}

//here we use the Angular2TokenService to display the profile details