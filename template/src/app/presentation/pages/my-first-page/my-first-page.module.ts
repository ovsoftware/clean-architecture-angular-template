import { NgModule } from "@angular/core";
import { ShowTextComponent } from './components/example-component/show-text.component';
import { MyFirstPageContainerComponent } from './my-first-page-container/my-first-page.component';
import { MyFirstPagePipe } from './pipes/my-first-page.pipe';
import { MyFirstPageService } from "./services/my-first-page.service";
import { MyFirstPageDirective } from './directives/my-first-page.directive';

@NgModule({
    imports: [],
    declarations: [
        MyFirstPageContainerComponent,
        ShowTextComponent,
        MyFirstPagePipe,
        MyFirstPageDirective
    ],
    exports: [],
    providers: [
        MyFirstPageService
    ]
})
export class MyFirstPageModule {}