import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLazyLoadedPageContainerComponent } from './my-lazy-loaded-page-container/my-lazy-loaded-page-container.component';

const routes: Routes = [{ path: '', component: MyLazyLoadedPageContainerComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MyLazyLoadedPageRoutingModule { }
