import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material/material.module';
import { NavItemDirective } from './directives/nav-item.directive';
import { NavbarComponent } from './navbar.component';

@NgModule({
    declarations: [NavbarComponent, NavItemDirective],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [NavbarComponent],
})
export class NavbarModule {}
