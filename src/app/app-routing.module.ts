import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
    {
        path: 'menu',
        component: MenuComponent,
    },
    {
        path: '**',
        redirectTo: 'menu',
    },
];

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
};

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
