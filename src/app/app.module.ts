import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import{FormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { fwcAPIInterceptor } from './navbar/auth';
import { FormsComponent } from './forms/forms.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {NgxPaginationModule} from 'ngx-pagination';
 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    FormsComponent,
    ParentComponent,
    ChildComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:fwcAPIInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
