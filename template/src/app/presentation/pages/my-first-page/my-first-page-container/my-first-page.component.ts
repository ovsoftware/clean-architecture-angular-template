import { Component } from "@angular/core";

@Component({
    selector: 'temp-my-first-page',
    templateUrl: './my-first-page.component.html',
    styleUrls: ['./my-first-page.component.scss']
})
export class MyFirstPageContainerComponent {

    greetingText: string = "Hello Component";

}