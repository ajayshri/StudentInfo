import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription }       from 'rxjs/Subscription';
import { ILogin } from './login';
import { LoginService } from '../_services/loginService';
import { AlertService } from '../_services/alert.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  model: any = {};
  loading = false;
  returnUrl: string;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _loginService: LoginService,
        private alertService: AlertService,
         private _fb: FormBuilder) { }

  ngOnInit() {
    this.bindForm("PASS");    
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }
  // Login(model: ILogin, isValid: boolean) {
  //   if (isValid) {
             
  //           this._loginService.login()
  //               .subscribe(Login => {
  //               this.Login = Login;                
  //               },
  //               error => this.errorMessage = <any>error);
  //       }

  // }
Login(model: ILogin, isValid: boolean) {
    // if (isValid) {
      console.log("sdafdsa",model);
        // this.loading = true;
        // this._loginService.login(this.model.username, this.model.password)
        //     .subscribe(
        //         data => {
        //             this._router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
         this._router.navigateByUrl("/Home/dashboard");
    //  }
    }

  bindForm(request: string) {
        if (request == "PASS") {
            this.loginForm = this._fb.group({
                Username: ['', Validators.compose([Validators.required, Validators.maxLength(150), Validators.minLength(3)])],                
                password: ['', Validators.compose([Validators.required, Validators.maxLength(150), Validators.minLength(3)])],                
            });
        }
    }

}
