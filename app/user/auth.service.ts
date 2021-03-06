import { Injectable } from '@angular/core';
import { Headers , Http, RequestOptions, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IUser} from './user.model';
import "/app/rxjs-extensions";

@Injectable()
export class AuthService {
    currentUser:IUser;

    constructor(private _http: Http) {}

    loginUser(userName: string, password: string) {
        let headers = new Headers({"Content-Type":"application/json"});
        let options = new RequestOptions({headers: headers});

        let loginInfo = {
            "username" : userName,
            "password" : password
        }

        return this._http.post("./api/login", loginInfo, options).do(response => {
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

    checkAuthenticationStatus() {
        return this._http.get("/api/currentIdentity").map((response: any) => {
          if (response._body) {
              return response.json();
          }  else {
              return {}
          }
        }).do(currentUser => {
            if (currentUser.userName) {
                this.currentUser = currentUser;
            }
        }).subscribe();
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        let headers = new Headers({"Content-Type":"application/json"});
        let options = new RequestOptions({headers: headers});

        return this._http.put(`/api/users/${this.currentUser.id}`, JSON.stringify(this.currentUser), options);
    }

    logout() {

        this.currentUser = undefined;

        let headers = new Headers({"Content-Type": "application/json"});
        let options = new RequestOptions({headers: headers});

        return this._http.post("/api/logout", JSON.stringify({}), options);
    }
}