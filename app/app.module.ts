import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { 
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouterActivator,
    EventListResolver


} from './events/index';

import { appRoutes } from './routes';
import { EventsAppComponent } from './events-app.component';
import {  } from './events/events-list.component';
import {  } from './events/event-thumbnail.component';
import {  } from './events/create-event.component';
import { NavBarComponent } from './nav/navbar.component';
import {  } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import {  } from './events/event-details/event-details.component';
import { Error404Component } from './errors/404.component';
import {  } from './events/event-details/event-route-activator.service';
import {  } from './events/events-list-resolver.service';


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent, EventsListComponent, 
                    EventThumbnailComponent, EventDetailsComponent, CreateEventComponent, NavBarComponent, Error404Component],
    providers: [EventService, ToastrService, EventRouterActivator, EventListResolver,
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