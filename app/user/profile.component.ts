import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
    templateUrl: "/app/user/profile.component.html",
    styles: [`
        em {float: right; color: #E05C65; padding-left: 10px;}
        .error input {background-color: #E3C3C5;}
        .error ::-webkit-input-placeholder {color: #999;}
        .error ::-moz-placeholder {color: #999;}
        .error :-moz-placeholder {color: #999;}
        .error ::-ms-input-placeholder {color: #999;}
        .pull-right {float: right;}

    `]
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup;
    private firstName: FormControl;
    private lastName: FormControl;

    constructor(private _authService: AuthService, private _router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr){}


    ngOnInit() {
        this.firstName = new FormControl(this._authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-z].*')]);
        this.lastName = new FormControl(this._authService.currentUser.lastName, Validators.required);

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched;
    }

    validateLastName() {
        return this.lastName.valid || this.firstName.untouched;
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this._authService.updateCurrentUser(formValues.firstName, formValues.lastName).subscribe(() => {
                this.toastr.success("Profile Saved");
            });
        }
    }

    cancel() {
        this.navigateToEventPage()
    }

    logout() {
        this._authService.logout().subscribe(() => {
            this._router.navigate(['/user/login']);
        });
    }

    navigateToEventPage() {
        this._router.navigate(['events']);
    }

}