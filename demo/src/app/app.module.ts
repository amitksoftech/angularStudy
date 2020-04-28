import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import { RegisterationComponent } from './registeration/registeration.component';
import { SimpleregisterationComponent } from './simpleregisteration/simpleregisteration.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { PipesexampleComponent } from './pipesexample/pipesexample.component';
import { DataService } from './services/data.service';
import { ViewuserdetailsmodelComponent } from './viewuserdetailsmodel/viewuserdetailsmodel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    ContactusComponent,
    FeedbackComponent,
    RegisterationComponent,
    SimpleregisterationComponent,
    TwowaybindingComponent,
    Dashboard1Component,
    IfelseComponent,
    PipesexampleComponent,
    ViewuserdetailsmodelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
