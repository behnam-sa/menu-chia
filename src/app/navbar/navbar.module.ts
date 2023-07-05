import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material/material.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [NavbarComponent],
})
export class NavbarModule {}
