import { Component, Input } from '@angular/core';
import { MaterialModule } from 'src/material/material.module';
import { MenuSubitem } from '../models/menu-subitem';
import { LocalNumberPipe } from '../pipes/local-number.pipe';

@Component({
    selector: 'app-menu-subitems',
    standalone: true,
    imports: [MaterialModule, LocalNumberPipe],
    templateUrl: './menu-subitems.component.html',
    styleUrl: './menu-subitems.component.scss',
})
export class MenuSubitemsComponent {
    @Input({ required: true })
    public subitems: MenuSubitem[] | undefined;
}
