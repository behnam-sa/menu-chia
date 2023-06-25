import { Component } from '@angular/core';
import { MenuProviderService } from './services/menu-provider.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
    public menu$ = this.menuProvider.menu$;

    constructor(public menuProvider: MenuProviderService) {}
}
