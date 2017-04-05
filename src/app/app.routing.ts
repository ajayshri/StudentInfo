import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{RegisterComponent} from './register/register.component';
import{ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{IndexComponent} from './index/index.component';
import{NavigationComponent} from './navigation/navigation.component';
import{HeaderComponent} from './header/header.component';
import{TaskComponent} from './task/task.component';
import{AddTaskComponent} from './task/addtask.component';

const appRoutes: Routes = [    
    { path: 'login', component: LoginComponent },
    {path: 'register',component:RegisterComponent},
    {path:'forgotpassword',component:ForgotpasswordComponent},
    // {path:'Home/dashboard',component:DashboardComponent},

{ path: 'Home/dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'Index', pathMatch: 'full' },
      { path: 'Index', component: IndexComponent },
      {path:'task',component:TaskComponent},
       {path:'task/addtask',component:AddTaskComponent},
    
    ]
  },

//  {path:'Home/task',component:TaskComponent},

    // {path:'Home/index',component:IndexComponent},
    


    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);