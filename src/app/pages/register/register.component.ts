import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  registerUserData = {}
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res)
        localStorage.setItem('token', res.token)
        },

      err => console.log(err)
    )
  }

}
