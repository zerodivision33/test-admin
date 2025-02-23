import { UserService } from './../../user.service';
import { AuthService } from './../../auth.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  
  userData: any;
  constructor(location: Location,  private element: ElementRef, private router: Router, private _authService: AuthService, private _userService:  UserService) {
    this.location = location;
    this._authService = _authService;
    this.userData = [];
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this._userService.getUserDetails()
      .subscribe(
        (response:  any) => this.userData = response.data,
        err => console.log(err)
    )
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

}
