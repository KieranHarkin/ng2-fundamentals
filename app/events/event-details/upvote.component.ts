import { Component, Input, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'upvote',
    templateUrl: 'app/events/event-details/upvote.component.html',
    styleUrls: ['/app/events/event-details/upvote.component.css']
})
export class UpvoteComponent{

    @Input() count: string;
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white'
    }
    @Output() vote = new EventEmitter();
    iconColor: string;

    onClick() {
        this.vote.emit({});
    }
}