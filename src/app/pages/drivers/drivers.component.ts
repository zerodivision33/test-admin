import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/drivers.service';
import { Router } from '@angular/router';
import { AcceptService } from 'src/app/accept.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  
  public page = 1;
  pageSize = 10;

  driversList: any;
  constructor(private _driversService : DriversService, private _router: Router,
    private _acceptService: AcceptService) { 
    this.driversList = []
  }

  ngOnInit(): void {
    this._driversService.getDriversList(this.page, this.pageSize)
    .subscribe(
      res => this.driversList = res,
      err => console.log(err)
    );
  }

  acceptDriver(id){
    this._driversService.acceptDriver(id)
    .subscribe(
      res => {
        console.log(res);
        window.location.reload();
      },
      err => console.log(err)
    )
  }

  rejectDriver(id){
    this._driversService.rejectDriver(id)
    .subscribe(
      res => {
        console.log(res);
        window.location.reload();
      },
      err => console.log(err)
    )
  }

}
