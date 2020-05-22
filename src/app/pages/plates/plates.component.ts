import { PlateService } from './../../plate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plates',
  templateUrl: './plates.component.html',
  styleUrls: ['./plates.component.css']
})
export class PlatesComponent implements OnInit {

  platesList: any;
  constructor(private _plateService: PlateService) { 
    this.platesList = []
  }

  ngOnInit(){
    this._plateService.getPlates()
      .subscribe(
        res => this.platesList = res.data,
        err => console.log(err)
    )
  }

}
