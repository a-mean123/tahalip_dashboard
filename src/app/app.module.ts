import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { GestionContactComponent } from './admin/gestion-contact/gestion-contact.component';
import { GestionQuestionComponent } from './admin/gestion-question/gestion-question.component';
import { GestionReponsesComponent } from './admin/gestion-reponses/gestion-reponses.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListContactComponent } from './admin/gestion-contact/list-contact/list-contact.component';
import { ListDetailComponent } from './admin/gestion-contact/list-detail/list-detail.component';
import { AddQuestionComponent } from './admin/gestion-question/add-question/add-question.component';
import { ListQuestionComponent } from './admin/gestion-question/list-question/list-question.component';
import { DetailQuestionComponent } from './admin/gestion-question/detail-question/detail-question.component';
import { HeaderComponent } from './admin/header/header.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GestionGroupeComponent } from './admin/gestion-groupe/gestion-groupe.component';
import { AddGroupeComponent } from './admin/gestion-groupe/add-groupe/add-groupe.component';
import { ListGroupeComponent } from './admin/gestion-groupe/list-groupe/list-groupe.component';
import { DetailGroupeComponent } from './admin/gestion-groupe/detail-groupe/detail-groupe.component';
import { GestionvideoquestionComponent } from './admin/gestionvideoquestion/gestionvideoquestion.component';
import { AddvidquesComponent } from './admin/gestionvideoquestion/addvidques/addvidques.component';
import { ListvidquesComponent } from './admin/gestionvideoquestion/listvidques/listvidques.component';
import { GestionvideoComponent } from './admin/gestionvideo/gestionvideo.component';
import { AddvideoComponent } from './admin/gestionvideo/addvideo/addvideo.component';
import { ListvideoComponent } from './admin/gestionvideo/listvideo/listvideo.component';
import { CategorieComponent } from './admin/categorie/categorie.component';
import { JoinComponent } from './admin/join/join.component';
import { DataService } from './services/data.service';
import { AuthGuard } from './services/auth.guard';
 @NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    GestionContactComponent,
    GestionQuestionComponent,
    GestionReponsesComponent,
    DashboardComponent,
    ListContactComponent,
    ListDetailComponent,
    AddQuestionComponent,
    ListQuestionComponent,
    DetailQuestionComponent,
    HeaderComponent,
    SidenavComponent,
    GestionGroupeComponent,
    AddGroupeComponent,
    ListGroupeComponent,
    DetailGroupeComponent,
    GestionvideoquestionComponent,
    AddvidquesComponent,
    ListvidquesComponent,
    GestionvideoComponent,
    AddvideoComponent,
    ListvideoComponent,
    CategorieComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
