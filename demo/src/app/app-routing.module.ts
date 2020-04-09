import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterationComponent } from './registeration/registeration.component';


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

    path: "registeration",
    component: RegisterationComponent

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
