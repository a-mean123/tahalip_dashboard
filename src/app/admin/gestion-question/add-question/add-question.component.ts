import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  @ViewChild('fileInput', { static: false}) fileInput: ElementRef;
  constructor(private data : DataService) { }

  question = {
    text: '',
    like: 0,
    titre: '',
  
  }

  groupes: any;

  ngOnInit(): void {
    this.data.getAllGroupe().subscribe(
      res=>{
        this.groupes = res;

      },
      err=>{
        console.log(err);
        
      }
    );
  }


alert = false;

  add(){

    const imageBlob = this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('image', imageBlob);
    file.set('text', this.question.text);
    file.set('titre', this.question.titre);

    file.set('like', this.question.like.toString());
  
   
    console.log(file);
    
    this.data.addQuestion(file).subscribe(
      res=>{
        this.alert = true;
        setTimeout(() => {
            this.alert = false;
        }, 4000);
        this.question = {
          text: '',
          like: 0,
          titre: ''
     
        }
      }, 
      err=>{
        console.log(err);
        
      }
    );
  }
}
