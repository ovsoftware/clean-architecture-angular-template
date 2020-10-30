import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFirstPageContainerComponent } from '@pages/my-first-page/my-first-page-container/my-first-page.component';


const routes: Routes = [
    {
        path: '',
        component: MyFirstPageContainerComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
