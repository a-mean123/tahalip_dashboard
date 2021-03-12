import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-groupe',
  templateUrl: './list-groupe.component.html',
  styleUrls: ['./list-groupe.component.css']
})
export class ListGroupeComponent implements OnInit {

  constructor(private data: DataService) { }

  groupes: any;

  ngOnInit(): void {
    this.data.getAllGroupe().subscribe(
      res=>{
        this.groupes = res;
        console.log(this.groupes);
        
      }
      ,err=>console.log(err)
      
    );
  }



  uptStatusGroupe(id: any, status: any){

    this.data.updateGroupeState(id, status).subscribe(
      res=>{
        this.ngOnInit();
      }, err=>{
        console.log(err);
        
      }
    );

  }







  delete(id: any){
    this.data.deleteGroupe(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
        
      }
    );
  }
}
