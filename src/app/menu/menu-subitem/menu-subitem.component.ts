import { Component, Input } from '@angular/core';
import { MaterialModule } from 'src/material/material.module';
import { MenuSubitem } from '../models/menu-subitem';
import { LocalNumberPipe } from '../pipes/local-number.pipe';

@Component({
    selector: 'app-menu-subitem',
    standalone: true,
    imports: [MaterialModule, LocalNumberPipe],
    templateUrl: './menu-subitem.component.html',
    styleUrl: './menu-subitem.component.scss',
})
export class MenuSubitemComponent {
    @Input({ required: true })
    public subitems: MenuSubitem[] | undefined;
}
