import { Component, Input } from "@angular/core";

@Component({
    selector: 'temp-show-text',
    templateUrl: 'show-text.component.html',
    styleUrls: [ 'show-text.component.scss' ]
})
export class ShowTextComponent {

    @Input()
    messageText: string;
}