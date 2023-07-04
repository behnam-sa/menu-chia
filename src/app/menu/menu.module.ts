import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/material/material.module';
import { MenuComponent } from './menu.component';
import { LocalNumberPipe } from './pipes/local-number.pipe';

@NgModule({
    declarations: [MenuComponent, LocalNumberPipe],
    imports: [CommonModule, HttpClientModule, MaterialModule],
    providers: [],
})
export class MenuModule {}
