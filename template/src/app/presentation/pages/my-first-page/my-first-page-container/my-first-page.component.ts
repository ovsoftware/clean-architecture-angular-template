import { Component, OnInit } from "@angular/core";
import { GetMessageUsecase } from '@usecases/get-message-usecase';
import { MyFirstPageService } from '../services/my-first-page.service';

@Component({
    templateUrl: './my-first-page.component.html',
    styleUrls: ['./my-first-page.component.scss']
})
export class MyFirstPageContainerComponent implements OnInit {

    greetingText: string;

    constructor(private getMessageUsecase: GetMessageUsecase, private myFirstPageService: MyFirstPageService) {}

    ngOnInit() {
        this.getMessageUsecase.exec().subscribe(m => this.greetingText = m.content);
    }
}