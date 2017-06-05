import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html'
})
export class EventThumbnailComponent {
    @Input() event: any
    @Output() eventClick = new EventEmitter()

    someProperty: string = "some value";

    handleClickMe() {
        this.eventClick.emit('foo');
    }

    logFoo() {
        console.log("foo");
    }
}