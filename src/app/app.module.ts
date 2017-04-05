import{AlertModule} from 'ng2-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{routing} from './app.routing'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginService } from './_services/loginService';
import { AlertService } from './_services/alert.service';

import { FormGroup, FormControl, FormBuilder, Validator, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './task/addtask.component';

@NgModule({
  declarations: [
    AppComponent, 

    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    IndexComponent,
    NavigationComponent,
    HeaderComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [
    LoginService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
