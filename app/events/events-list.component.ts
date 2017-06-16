import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';
import { ToastrService} from '../common/toastr.service';

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {

    events: any

    constructor(private eventService: EventService, private toastrService: ToastrService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.activatedRoute.snapshot.data['events'];
    }

    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName);
    }

    handleEventClick(data) {
        console.log(data);
    }
}