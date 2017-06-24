import { Component, Input, Inject, ViewChild, ElementRef } from "@angular/core";
import { JQUERY_TOKEN } from './jQuery.service';

@Component({
    selector: 'simple-modal',
    templateUrl: 'app/common/simple-modal.component.html',
    styles: [`
        .modal-body { height: 250px; overflow-y: scroll;}
    `]
})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalcontainer') containerEl: ElementRef;

    constructor(@Inject(JQUERY_TOKEN) private $: any) {

    }

    closeModal() {
        this.$(this.containerEl.nativeElement).modal('hide');
    }
}