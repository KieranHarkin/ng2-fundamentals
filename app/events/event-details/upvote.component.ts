import { Component, Input, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'upvote',
    templateUrl: 'app/events/event-details/upvote.component.html',
    styleUrls: ['/app/events/event-details/upvote.component.css']
})
export class UpvoteComponent{

    @Input() count: string;
    @Input() voted: boolean;
    @Output() vote = new EventEmitter();

    onClick() {
        this.vote.emit({});
    }
}