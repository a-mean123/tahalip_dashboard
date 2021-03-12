import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-addvidques',
  templateUrl: './addvidques.component.html',
  styleUrls: ['./addvidques.component.css']
})
export class AddvidquesComponent implements OnInit {

  @ViewChild('fileInput', { static: false}) fileInput: ElementRef;
  constructor(private data : DataService) { }

  question = {
    text: '',
    like: 0,
    idVideo: ''
  }

  groupes: any;

  ngOnInit(): void {

  }




  add(){

    const imageBlob = this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('image', imageBlob);
    file.set('text', this.question.text);
    file.set('like', this.question.like.toString());
    file.set('idVideo', this.question.idVideo);


   
    console.log(file);
    
    this.data.addQuestionVideo(file).subscribe(
      res=>{
        this.question = {
          text: '',
          like: 0,
          idVideo: ''
        }
      }, 
      err=>{
        console.log(err);
        
      }
    );
  }
}
