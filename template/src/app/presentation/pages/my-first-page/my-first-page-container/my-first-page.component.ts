import { Message } from '@entities/message';
import { Component, OnInit } from "@angular/core";
import { GetMessageUsecase } from '@usecases/get-message-usecase';

@Component({
    selector: 'temp-my-first-page',
    templateUrl: './my-first-page.component.html',
    styleUrls: ['./my-first-page.component.scss']
})
export class MyFirstPageContainerComponent implements OnInit {

    greetingText: string;

    constructor(private getMessageUsecase: GetMessageUsecase) {}

    ngOnInit() {
        this.getMessageUsecase.exec().subscribe(m => this.greetingText = m.content);
    }
}