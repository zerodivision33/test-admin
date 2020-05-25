import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList: any;
  constructor(private _usersService: UsersService) {
    this.usersList = []
   }

  ngOnInit(): void {
    this._usersService.getUsersList()
    .subscribe(
      res => this.usersList = res,
      err => console.log(err)
    )
  }

}
