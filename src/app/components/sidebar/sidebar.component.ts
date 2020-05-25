import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-cyan', class: '' },
    { path: '/users', title: 'Users',  icon: 'fas fa-users text-primary', class: '' },
    { path: '/chefs', title: 'Chefs',  icon: 'fas fa-utensils text-yellow', class: '' },
    { path: '/drivers', title: 'Drivers',  icon: 'fas fa-shipping-fast text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'far fa-user text-indigo', class: '' },
    { path: '/plates', title: 'Plates',  icon:'fas fa-hamburger text-teal', class: '' },
    { path: '/user-docs', title: 'User Docs',  icon:'far fa-folder-open text-red', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router, private _authService: AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
