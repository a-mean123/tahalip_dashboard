import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-groupe',
  templateUrl: './add-groupe.component.html',
  styleUrls: ['./add-groupe.component.css']
})
export class AddGroupeComponent implements OnInit {
  @ViewChild('fileInput', { static: false}) fileInput: ElementRef;
  constructor(private data : DataService) { }

  groupe = {
    name: '',
    description:'',
    image:'',
    founder:'602d32cc0eb3cb7954eabb3f',
    categorie:'',
    status: true,
   
  }


  categories:any;

  ngOnInit(): void {
    this.data.getAllcategorie().subscribe(
      res=>{
        this.categories = res;
      }
    );
  }



  alert = false;


  add(){

    const imageBlob = this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('image', imageBlob);
    file.set('name', this.groupe.name);
    file.set('description', this.groupe.description);
    file.set('founder', this.groupe.founder);
    file.set('categorie', this.groupe.categorie);
    file.set('status', this.groupe.status.toString());




  

    
    this.data.addGroupe(file).subscribe(
      res=>{
        this.alert = true;
        setTimeout(() => {
              this.alert = false;
        }, 4000);
        this.groupe = {
          name: '',
          description:'',
          image:'',
          founder:'',
          categorie:'',
          status:true
         
        }
      }, 
      err=>{
        console.log(err);
        
      }
    );
  }
}
