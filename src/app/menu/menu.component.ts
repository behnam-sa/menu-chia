import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/material/material.module';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { MenuProvider } from './services/menu-provider.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, MaterialModule, MenuSectionComponent],
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
    public menu$ = this.menuProvider.menu$;

    constructor(public menuProvider: MenuProvider) {}
}
