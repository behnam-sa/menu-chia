import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

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
];

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'disabled',
    anchorScrolling: 'disabled',
    scrollOffset: [0, 100],
};

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
