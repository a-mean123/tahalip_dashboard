import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-listvidques',
  templateUrl: './listvidques.component.html',
  styleUrls: ['./listvidques.component.css']
})
export class ListvidquesComponent implements OnInit {

  constructor(private data: DataService) { }

  questions: any;

  ngOnInit(): void {
    this.data.getAllQuestionVideo().subscribe(
      res=>{
        this.questions = res.questions;
        console.log(this.questions);
        
      }
      ,err=>console.log(err)
      
    );
  }



  delete(id: any){
    this.data.deleteQuestionVideo(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
        
      }
    );
  }
}
