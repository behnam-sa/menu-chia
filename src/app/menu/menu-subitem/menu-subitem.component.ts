import { Component, Input } from '@angular/core';
import { MenuSubitem } from '../models/menu-subitem';

@Component({
    selector: 'app-menu-subitem',
    templateUrl: './menu-subitem.component.html',
    styleUrl: './menu-subitem.component.scss',
})
export class MenuSubitemComponent {
    @Input({ required: true })
    public subitems: MenuSubitem[] | undefined;
}
