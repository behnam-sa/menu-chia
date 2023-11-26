import { Component, Input } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { MenuSection } from '../models/menu-section';

@Component({
    selector: 'app-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
    @Input({ required: true })
    public item!: MenuItem;

    @Input({ required: true })
    public section!: MenuSection;
}
