import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _data: DataService) { }

  categories: any;
  groupes: any;
  users: any;
  posts: any;
  questions: any;



  ngOnInit(): void {


    this._data.getAllGroupe().subscribe(
      res=>{
        this.groupes = res;
      }
    );


    this._data.getAllQuestion().subscribe(
      res=>{
        this.questions = res;
      }
    );


    this._data.getAllcategorie().subscribe(
      res=>{
        this.categories = res;
      }
    );


      this._data.getMembre().subscribe(
        res=>{
          this.users = res;
        }
      );



      this._data.getAllPost().subscribe(
        res=>{
          this.posts = res;
        }
      );

      


  }

}
