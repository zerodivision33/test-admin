import { ManagedocsService } from './../../managedocs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managedocs',
  templateUrl: './managedocs.component.html',
  styleUrls: ['./managedocs.component.css']
})
export class ManagedocsComponent implements OnInit {

  managedocslist: any;
  constructor(private _managedocsService: ManagedocsService) {
    this.managedocslist = []
   }

   ngOnInit(): void {
    this._managedocsService.getUserDocs()
      .subscribe(res => {
          console.log(res);
          this.managedocslist = res;
        },
            err => console.log(err))
  }

}
