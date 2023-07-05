import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const matModules = [
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatExpansionModule,
    MatSidenavModule,
    MatButtonModule,
];

@NgModule({
    imports: matModules,
    exports: matModules,
})
export class MaterialModule {}
