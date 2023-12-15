import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CustomIconRegistry } from 'src/material/services/custom-icon-registry.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    protected readonly isProduction = environment.production;

    public constructor(private customIconRegistry: CustomIconRegistry) {}

    public ngOnInit(): void {
        this.customIconRegistry.addResolver();
    }
}
