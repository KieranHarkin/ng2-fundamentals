import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from './shared/index';


@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [`
            .pad-left {margin-left: 10px;} 
            .well div { color: #bbb; } 
            .thumbnail {min-height: 250px;}`]
})
export class EventThumbnailComponent {
    @Input() event: IEvent
    @Output() eventClick = new EventEmitter()

    someProperty: string = "some value";

    constructor(private toastrService: ToastrService){}

    handleClickMe() {
        this.eventClick.emit('foo');
    }

    logFoo() {
        console.log("foo");
        this.toastrService.info("Logging Some Foo");

    }
}