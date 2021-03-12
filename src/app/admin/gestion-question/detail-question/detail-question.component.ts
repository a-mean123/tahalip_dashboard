import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , ParamMap } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.css']
})
export class DetailQuestionComponent implements OnInit {


  constructor(   private data : DataService, private router: ActivatedRoute) { }

  id: any;
  question: any;
  responses: any;

  ngOnInit(): void {
      
    this.id = this.router.snapshot.paramMap.get('id');
    this.data.detailQuestiont(this.id).subscribe(
      res=>{
        this.question = res;
      },
      err=>{
        console.log(err);
        
      }
    );


    this.data.detailReponseQuestion(this.id).subscribe(
      res=>{
        this.responses = res;
      },
      err=>{
        console.log(err);
        
      }
    );

  }

}
