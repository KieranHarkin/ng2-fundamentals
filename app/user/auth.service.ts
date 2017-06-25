import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/RX';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser:IUser;

    constructor(private _http: Http) {}

    loginUser(userName: string, password: string) {
        let headers = new Headers({'ContentType':'application/json'});
        let options = new RequestOptions({headers: headers});

        let loginInfo = {
            "username" : userName,
            "password" : password
        }

        return this._http.post('./api/login', loginInfo, options).do(response => {
            if (response) {
                this.currentUser = <IUser>response.json().user;
            }
        }).catch(error => {
            return Observable.of(false);
        });
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}