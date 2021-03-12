import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GestionContactComponent } from './admin/gestion-contact/gestion-contact.component';
import { ListContactComponent } from './admin/gestion-contact/list-contact/list-contact.component';
import { ListDetailComponent } from './admin/gestion-contact/list-detail/list-detail.component';
import { AddGroupeComponent } from './admin/gestion-groupe/add-groupe/add-groupe.component';
import { DetailGroupeComponent } from './admin/gestion-groupe/detail-groupe/detail-groupe.component';
import { GestionGroupeComponent } from './admin/gestion-groupe/gestion-groupe.component';
import { ListGroupeComponent } from './admin/gestion-groupe/list-groupe/list-groupe.component';
import { AddQuestionComponent } from './admin/gestion-question/add-question/add-question.component';
import { DetailQuestionComponent } from './admin/gestion-question/detail-question/detail-question.component';
import { GestionQuestionComponent } from './admin/gestion-question/gestion-question.component';
import { ListQuestionComponent } from './admin/gestion-question/list-question/list-question.component';
import { GestionReponsesComponent } from './admin/gestion-reponses/gestion-reponses.component';
import { AddvidquesComponent } from './admin/gestionvideoquestion/addvidques/addvidques.component';
import { GestionvideoquestionComponent } from './admin/gestionvideoquestion/gestionvideoquestion.component';
import { ListvidquesComponent } from './admin/gestionvideoquestion/listvidques/listvidques.component';
import { LoginComponent } from './login/login.component';
import { AddvideoComponent } from './admin/gestionvideo/addvideo/addvideo.component';
import { ListvideoComponent } from './admin/gestionvideo/listvideo/listvideo.component';
import { CategorieComponent } from './admin/categorie/categorie.component';
import { JoinComponent } from './admin/join/join.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [

  {path:'' ,  canActivate : [AuthGuard], component: AdminComponent , children:[
    {path: '' , component: DashboardComponent},
    {path: 'contact' , component: GestionContactComponent , children: [
      {path: '' , component: ListContactComponent},
      {path: 'detail/:id' , component: ListDetailComponent}
    ]},

    {path: 'categorie' , component: CategorieComponent },
    {path: 'join' , component: JoinComponent },

    {path: 'question' , component: GestionQuestionComponent , children: [
      {path: '' , component: ListQuestionComponent},
      {path: 'add' , component: AddQuestionComponent},
      {path: 'detail/:id' , component: DetailQuestionComponent}
    ]},

    {path: 'videoquestion' , component: GestionvideoquestionComponent , children: [
      {path: '' , component: ListvidquesComponent},
      {path: 'add' , component: AddvidquesComponent},
      
    ]},


    {path: 'video' , component: GestionvideoquestionComponent , children: [
      {path: '' , component: ListvideoComponent},
      {path: 'add' , component: AddvideoComponent },
      
    ]},

    {path:'groupe' , component: GestionGroupeComponent, children:[
      {path:'' , component:ListGroupeComponent},
      {path:'add' , component: AddGroupeComponent},
      {path: 'detail/:id' , component: DetailGroupeComponent}
      
    ]},
    {path: 'reponse' , component: GestionReponsesComponent}
  ]},
  {path: 'login' , component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
