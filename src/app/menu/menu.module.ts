import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';

@NgModule({
    declarations: [MenuComponent],
    imports: [CommonModule, HttpClientModule],
    providers: [],
})
export class MenuModule {}
