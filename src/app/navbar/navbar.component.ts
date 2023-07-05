import { Component } from '@angular/core';
import { MenuProvider } from '../menu/services/menu-provider.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    public menu$ = this.menuProvider.menu$;

    constructor(public menuProvider: MenuProvider) {}
}
