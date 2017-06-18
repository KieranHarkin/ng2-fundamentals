import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    templateUrl: "/app/user/profile.component.html"
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup;

    constructor(private _authService: AuthService, private _router: Router){}


    ngOnInit() {
        let firstName = new FormControl(this._authService.currentUser.firstName);
        let lastName = new FormControl(this._authService.currentUser.lastName);

        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        });
    }

    saveProfile(formValues) {
        this._authService.updateCurrentUser(formValues.firstName, formValues.lastName);
        this.navigateToEventPage();
    }

    cancel() {
        this.navigateToEventPage()
    }

    navigateToEventPage() {
        this._router.navigate(['events']);
    }

}