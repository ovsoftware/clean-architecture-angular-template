import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFirstPageContainerComponent } from '@pages/my-first-page/my-first-page-container/my-first-page.component';

const routes: Routes = [
    {
        path: '',
        component: MyFirstPageContainerComponent,
    },
    {
        path: 'my-lazy-loaded-page',
        loadChildren: () =>
            import(
                './presentation/pages/my-lazy-loaded-page/my-lazy-loaded-page.module'
            ).then((m) => m.MyLazyLoadedPageModule),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
