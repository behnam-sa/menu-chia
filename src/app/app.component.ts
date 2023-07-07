import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { CustomIconRegistry } from 'src/material/services/custom-icon-registry.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    private window: Window;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private customIconRegistry: CustomIconRegistry
    ) {
        this.window = document.defaultView!;
    }

    public ngOnInit(): void {
        this.customIconRegistry.addResolver();
    }

    @HostListener('window:scroll', ['$event'])
    public onWindowScroll() {
        this.document.documentElement.style.setProperty(
            '--scroll-position',
            this.window.scrollY.toString()
        );
    }
}
