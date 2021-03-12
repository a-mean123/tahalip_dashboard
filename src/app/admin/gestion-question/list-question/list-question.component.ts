import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  constructor(private data: DataService) { }

  questions: any;

  ngOnInit(): void {
    this.data.getAllQuestion().subscribe(
      res=>{
        this.questions = res;
        console.log(this.questions);
        
      }
      ,err=>console.log(err)
      
    );
  }



  delete(id: any){
    this.data.deleteQuestion(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
        
      }
    );
  }
}
