import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResponsiveImageComponent } from 'src/app/responsive-image/responsive-image.component';
import { MaterialModule } from 'src/material/material.module';
import { MenuSubitemComponent } from '../menu-subitem/menu-subitem.component';
import { MenuItem } from '../models/menu-item';
import { MenuSection } from '../models/menu-section';
import { LocalNumberPipe } from '../pipes/local-number.pipe';

@Component({
    selector: 'app-menu-item',
    standalone: true,
    imports: [
        RouterModule,
        MaterialModule,
        MenuSubitemComponent,
        ResponsiveImageComponent,
        LocalNumberPipe,
    ],
    templateUrl: './menu-item.component.html',
    styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
    @Input({ required: true })
    public item!: MenuItem;

    @Input({ required: true })
    public section!: MenuSection;
}
