import { Routes } from '@angular/router';
import { 
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouterActivator,
    EventListResolver
} from './events/index';

import { Error404Component } from './errors/404.component';

export const appRoutes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver} },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},    
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator] },
    { path: '404', component: Error404Component },

    { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]