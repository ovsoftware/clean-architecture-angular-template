import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ShowTextComponent } from './components/example-component/show-text.component';
import { MyFirstPageContainerComponent } from './my-first-page-container/my-first-page.component';

@NgModule({
    imports: [],
    declarations: [
        MyFirstPageContainerComponent,
        ShowTextComponent
    ],
    exports: [],
})
export class MyFirstPageModule {}