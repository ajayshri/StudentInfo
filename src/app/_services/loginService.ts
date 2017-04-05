import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { ILogin } from '../login/login';

@Injectable()
export class LoginService {


    constructor(private http: Http) { }

    // login(login: ILogin): Observable<ILogin> {
    //     return this.loginCheck(login);

    // }
    // loginCheck(login :ILogin): Observable<ILogin> { {
    //     return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
    //         .map((response: Response) => {
    //             // login successful if there's a jwt token in the response
    //             let user = response.json();
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //             }
    //         });
    // }
    login(username: string, password: string) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {                
                let user = response.json();
                if (user && user.token) {                    
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }
}
