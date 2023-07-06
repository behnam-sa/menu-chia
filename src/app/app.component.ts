import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    private window: Window;

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.window = document.defaultView!;
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event) {
        this.document.documentElement.style.setProperty(
            '--scroll-position',
            this.window.screenY.toString()
        );
    }
}
