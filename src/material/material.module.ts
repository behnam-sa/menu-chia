import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const matModules = [
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
];

@NgModule({
    imports: matModules,
    exports: matModules,
})
export class MaterialModule {}
