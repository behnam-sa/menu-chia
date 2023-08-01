import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/material/material.module';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { ResponsiveImageComponent } from './menu-section/responsive-image/responsive-image.component';
import { MenuComponent } from './menu.component';
import { LocalNumberPipe } from './pipes/local-number.pipe';

@NgModule({
    declarations: [
        MenuComponent,
        LocalNumberPipe,
        MenuSectionComponent,
        ResponsiveImageComponent,
    ],
    imports: [CommonModule, HttpClientModule, MaterialModule],
    providers: [],
})
export class MenuModule {}
