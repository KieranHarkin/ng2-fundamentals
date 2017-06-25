import { Component, OnInit } from "@angular/core";
import { EventService, IEvent } from '../events/shared/index';

@Component({
    selector: 'nav-event-list',
    templateUrl: '/app/nav/events-list-navbar.component.html',
    styleUrls: [`
        .nav-event-link { padding-left: 5px; }
    `]
})
export class EventsListNavbarComponent implements OnInit {

    events: IEvent[] = [];

    constructor(private _eventService: EventService) {}

    ngOnInit() {
        this._eventService.getEvents().subscribe((events) => {
            this.events = events;
        })
    }
}