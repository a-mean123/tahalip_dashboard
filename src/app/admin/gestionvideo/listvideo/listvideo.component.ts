import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-listvideo',
  templateUrl: './listvideo.component.html',
  styleUrls: ['./listvideo.component.css']
})
export class ListvideoComponent implements OnInit {

  constructor(private data: DataService) { }

  questions: any;

  ngOnInit(): void {
    this.data.getAllVideo().subscribe(
      res=>{
        this.questions = res;
        console.log(this.questions);
        
      }
      ,err=>console.log(err)
      
    );
  }



  delete(id: any){
    this.data.deleteVideo(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
        
      }
    );
  }
}
