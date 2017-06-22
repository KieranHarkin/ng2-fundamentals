import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { 
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouterActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
} from './events/index';

import { 
    TOASTR_TOKEN,
    Toastr,
    JQUERY_TOKEN,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective
 } from './common/index';

import { appRoutes } from './routes';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        EventsAppComponent, 
        EventsListComponent, 
        EventThumbnailComponent, 
        EventDetailsComponent, 
        CreateEventComponent, 
        NavBarComponent, 
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        SimpleModalComponent,
        ModalTriggerDirective,
        DurationPipe
    ],
    providers: [EventService, {provide: TOASTR_TOKEN, useValue: toastr}, {provide: JQUERY_TOKEN, useValue: jQuery}, EventRouterActivator, EventListResolver, AuthService,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}

function checkDirtyState(componnet:CreateEventComponent) {
    if (componnet.isDirty) {
        return window.confirm("You have not save this event, do you really want to cancel?");
    }
    return true;
}