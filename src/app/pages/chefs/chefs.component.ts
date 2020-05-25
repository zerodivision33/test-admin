import { Component, OnInit } from '@angular/core';
import { ChefsService } from 'src/app/chefs.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {

  chefsList: any;
  constructor(private _chefService: ChefsService) {
    this.chefsList = []
   }

  ngOnInit(): void {
    this._chefService.getChefsList()
    .subscribe(
      res => this.chefsList = res,
      err => console.log(err)
    )
  }

}
