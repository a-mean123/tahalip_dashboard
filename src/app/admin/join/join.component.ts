import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor(private _data: DataService) { }

  join: any;

  ngOnInit(): void {
    this._data.getAllJoin().subscribe(
      res=>{
        this.join = res;
        console.log(this.join);
        
        
      }
    );
  }

membre :any;
  upt_join(id: any, st: any, idM: any , idG: any){

    console.log(idM);
    
    this._data.getMembreById(idM).subscribe(
      res=>{
        this.membre = res;
       console.log(this.membre);
        if(st){
          this.membre.groupe.push(idG);
        }else{
          let ind = this.membre.groupe.indexOf(idG);
          this.membre.groupe.splice(ind, 1);
        }
      

        this._data.join(id, st , this.membre).subscribe(
          res=>{
            this.ngOnInit();
          }
        );

      }
    );


   

  }





}
