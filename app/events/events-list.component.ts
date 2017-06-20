import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';
import { IEvent } from './shared/index';

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {

    events: IEvent[]

    constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.activatedRoute.snapshot.data['events'];
    }
}