import { Component, OnInit } from '@angular/core';

import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  constructor(private data: DataService) { }

  contacts : any;
  ngOnInit(): void {
    this.data.getAllContact().subscribe(
      res=>{
        this.contacts = res;
      },
      err=>{
        console.log(err);
        
      }
    );
  }


  delete(id: any){
    this.data.deleteContact(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
        
      }
    );
  }
}
