import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { FormsComponent } from './forms/forms.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
// import { PaginationComponent } from './pagination/pagination.component';


const routes: Routes = [{
  path:'register',component:RegisterComponent
},
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent,canActivate:[AuthGuard]},{
  path:'forms',component:FormsComponent
},
{path:'parent',component:ParentComponent},
{path:'child',component:ChildComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
