import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { SimpleregisterationComponent } from './simpleregisteration/simpleregisteration.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { PipesexampleComponent } from './pipesexample/pipesexample.component';
import { ViewuserdetailsmodelComponent } from './viewuserdetailsmodel/viewuserdetailsmodel.component';


const routes: Routes = [
  {

    path: "",
    component: DashboardComponent

  },
  {

    path: "login",
    component: LoginComponent

  }, 
   {

    path: "viewuserdetails",
    component: ViewuserdetailsmodelComponent

  },
  {

    path: "registeration",
    component: RegisterationComponent

  },
  {

    path: "simpleregisteration",
    component: SimpleregisterationComponent

  },
  {

    path: "twowaybinding",
    component: TwowaybindingComponent

  },
  {

    path: "dashboard1",
    component: Dashboard1Component

  },
  {

    path: "ifelse",
    component: IfelseComponent

  },
  
  {

    path: "pipesexample",
    component: PipesexampleComponent

  },

  {
    path: "contactus",
    
    children: [
      {
        path: "",
        component: ContactusComponent
      },
      {
        path: "feedback",
        component: FeedbackComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
