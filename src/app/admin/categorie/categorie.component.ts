import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(private _data: DataService) { }


  categories: any;

  cat = {
    name:''
  }

  ngOnInit(): void {
    this._data.getAllcategorie().subscribe(
      res=>{
        this.categories = res;
      }
    );
  }


  ajoutCategorie(){
    this._data.addcategorie(this.cat).subscribe(
      res=>{
        this.ngOnInit();
      }
    );
  }

  delete(id){
    this._data.deletecategorie(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
        
      }
    );
  }


}
