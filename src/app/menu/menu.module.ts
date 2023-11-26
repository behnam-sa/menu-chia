import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material/material.module';
import { ResponsiveImageComponent } from '../responsive-image/responsive-image.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { MenuSubitemComponent } from './menu-subitem/menu-subitem.component';
import { MenuComponent } from './menu.component';
import { LocalNumberPipe } from './pipes/local-number.pipe';

@NgModule({
    declarations: [
        MenuComponent,
        LocalNumberPipe,
        MenuSectionComponent,
        MenuItemComponent,
        MenuSubitemComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        RouterModule,
        ResponsiveImageComponent,
    ],
    providers: [],
})
export class MenuModule {}
