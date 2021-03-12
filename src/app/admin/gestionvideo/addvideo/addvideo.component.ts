import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {

  @ViewChild('fileInput', { static: false}) fileInput: ElementRef;
  constructor(private data : DataService) { }

  question = {
    text: '',
    idYoutube:'',
    title: ''
  }

  groupes: any;

  ngOnInit(): void {

  }




  add(){

    const imageBlob = this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('image', imageBlob);
    file.set('text', this.question.text);
    file.set('title', this.question.title);
    file.set('idYoutube', this.question.idYoutube);


   
    console.log(file);
    
    this.data.addVideo(file).subscribe(
      res=>{
        this.question = {
          text: '',
          idYoutube:'',
          title: ''
        }
      }, 
      err=>{
        console.log(err);
        
      }
    );
  }

}
