import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
    {
        path: 'menu',
        component: MenuComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'menu',
    },
    {
        path: ':section/:item',
        outlet: 'preview',
        component: PreviewComponent,
    },
];

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'disabled',
    anchorScrolling: 'disabled',
    scrollOffset: [0, 125],
};

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
