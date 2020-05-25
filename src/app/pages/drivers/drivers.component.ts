import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/drivers.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  driversList: any;
  constructor(private _driversService : DriversService) { 
    this.driversList = []
  }

  ngOnInit(): void {
    this._driversService.getDriversList()
    .subscribe(
      res => this.driversList = res,
      err => console.log(err)
    )
  }

}
