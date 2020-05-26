import { Component, OnInit } from '@angular/core';
import { ChefsService } from 'src/app/chefs.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {

  public page = 1;
  pageSize = 10;

  chefsList: any;
  constructor(private _chefService: ChefsService, private http: HttpClient) {
    this.chefsList = []
   }

  ngOnInit(): void {
    this._chefService.getChefsList(this.page, this.pageSize)
    .subscribe(
      res => this.chefsList = res,
      err => console.log(err)
    );
  }


}
