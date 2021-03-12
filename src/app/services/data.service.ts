import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://5.196.13.136:3100/';

  constructor(private _router: Router, private http: HttpClient) { }





/***
 * 
 * auth
 */


 
loginUser(user) {
  return this.http.post<any>(this.url + 'user/login', user);
}

logoutUser() {
  localStorage.removeItem('token');
  this._router.navigate(['/login']);
}

getToken() {
  return localStorage.getItem('token');
}

loggedIn() {
  return !!localStorage.getItem('token');
}







/**
 * membre
 */

getMembreById(id: any){
  return this.http.get(this.url + 'membre/getmembrebyid/' + id);
}


getMembre(){
  return this.http.get(this.url + 'membre/getmembre');
}


/***
 * posts
 */



 getAllPost(){
   return this.http.get(this.url + 'post/getpost');
 }




/**
 * join 
 */

 getAllJoin(){
   return this.http.get(this.url + 'join/getjoinadmin');
 }


 join(id: any, st: any , mb: any){
   return this.http.put(this.url + 'join/updatejoinstatus/' + id + '/' + st , mb);
 }



  //video question



addVideo(question: any){
  return this.http.post<any>(this.url + 'video/addvideo' , question);
 }


 getAllVideo(){
  return this.http.get<any>(this.url + 'video/getallvideo');
 }

 deleteVideo(id: any){
  return this.http.delete<any>(this.url + 'video/deletevideo/' + id);

 }


 updateVideo(question: any, id: any){
  return this.http.put<any>(this.url + 'video/updatevideo/'+id , question);

 }


 detailQVideo(id: any){


  return this.http.get<any>(this.url + 'video/getvideobyid/' +id);

 }







//video question



addQuestionVideo(question: any){
  return this.http.post<any>(this.url + 'videoquestion/addquestion' , question);
 }


 getAllQuestionVideo(){
  return this.http.get<any>(this.url + 'videoquestion/getquestion');
 }

 deleteQuestionVideo(id: any){
  return this.http.delete<any>(this.url + 'videoquestion/deletequestion/' + id);

 }


 updateQuestionVideo(question: any, id: any){
  return this.http.put<any>(this.url + 'videoquestion/updatequestion/'+id , question);

 }


 detailQuestiontVideo(id: any){


  return this.http.get<any>(this.url + 'videoquestion/getquestionbyud/' +id);

 }






//Categorie



addcategorie(categorie: any){
  return this.http.post<any>(this.url + 'categorie/addcategorie' , categorie);
 }


 getAllcategorie(){
  return this.http.get<any>(this.url + 'categorie/getcategorie');
 }

 deletecategorie(id: any){
  return this.http.delete<any>(this.url + 'categorie/deletecategorie/' + id);

 }


 updatecategorie(categorie: any, id: any){
  return this.http.put<any>(this.url + 'categorie/updatecategorie/'+id , categorie);

 }


 detailcategorie(id: any){


  return this.http.get<any>(this.url + 'categorie/getcategoriebyud/' +id);

 }





  //question




  addQuestion(question: any){
   return this.http.post<any>(this.url + 'question/addquestion' , question);
  }


  getAllQuestion(){
   return this.http.get<any>(this.url + 'question/getquestion');
  }

  deleteQuestion(id: any){
   return this.http.delete<any>(this.url + 'question/deletequestion/' + id);

  }


  updateQuestion(question: any, id: any){
   return this.http.put<any>(this.url + 'question/updatequestion/'+id , question);

  }


  detailQuestiont(id: any){


   return this.http.get<any>(this.url + 'question/getquestionbyud/' +id);

  }




   //reponse




   addReponse(Reponse: any){
    return this.http.post<any>(this.url + 'reponse/addreponse' , Reponse);
   }
 
 
   getAllReponse(){
    return this.http.get<any>(this.url + 'reponse/getreponse');
   }
 
   deleteReponse(id: any){
    return this.http.delete<any>(this.url + 'reponse/deletereponse/' + id);
 
   }
 
 
   updateReponse(Reponse: any, id: any){
    return this.http.put<any>(this.url + 'reponse/updatereponse/'+id , Reponse);
 
   }
 
 
   detailReponset(id: any){
 
 
    return this.http.get<any>(this.url + 'reponse/getreponsebyid/' +id);
 
   }

   detailReponseQuestion(id: any){
 
 
    return this.http.get<any>(this.url + 'reponse/getresponsebyidQuestion/' +id);
 
   }


    //contact




  addContact(Contact: any){
    return this.http.post<any>(this.url + 'Contact/addcontact' , Contact);
   }
 
 
   getAllContact(){
    return this.http.get<any>(this.url + 'Contact/getcontact');
   }
 
   deleteContact(id: any){
    return this.http.delete<any>(this.url + 'Contact/deletecontact/' + id);
 
   }
 
 
   updateContact(Contact: any, id: any){
    return this.http.put<any>(this.url + 'Contact/updatecontact/'+id , Contact);
 
   }
 
 
   detailContactt(id: any){
 
 
    return this.http.get<any>(this.url + 'Contact/getcontactbyud/' +id);
 
   }



    //contact




    addGroupe(Groupe: any){
      return this.http.post<any>(this.url + 'groupe/addgroupe' , Groupe);
     }
   
   
     getAllGroupe(){
      return this.http.get<any>(this.url + 'groupe/getgroupeadmin');
     }
   

     getlatestGroupe(){
      return this.http.get<any>(this.url + 'groupe/getlastgroupe');
     }
   


     deleteGroupe(id: any){
      return this.http.delete<any>(this.url + 'groupe/deletegroupe/' + id);
   
     }
   
   
     updateGroupe(Groupe: any, id: any){
      return this.http.put<any>(this.url + 'groupe/updategroupe/'+id , Groupe);
   
     }
   
   
     detailGroupet(id: any){
   
   
      return this.http.get<any>(this.url + 'groupe/getgroupebyud/' +id);
   
     }
  
     updateGroupeState(id: any, status:any){
       return this.http.put(this.url + 'groupe/updategroupestatus/' + id +'/' + status , '');
     }


}
