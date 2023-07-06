import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuSection } from '../models/menu-section';

@Component({
    selector: 'app-menu-section',
    templateUrl: './menu-section.component.html',
    styleUrls: ['./menu-section.component.scss'],
})
export class MenuSectionComponent implements AfterViewInit {
    @Input({ required: true })
    public section!: MenuSection;

    constructor(private element: ElementRef, private router: Router) {}

    public ngAfterViewInit(): void {
        const observer = new IntersectionObserver(
            (entries) => this.observationEvent(entries),
            {
                rootMargin: '-30% 0px -70% 0px',
                threshold: 0,
            }
        );
        observer.observe(this.element.nativeElement);
    }

    private observationEvent(entries: IntersectionObserverEntry[]): void {
        if (entries.some((entry) => entry.isIntersecting)) {
            this.router.navigate([], {
                fragment: this.section.caption,
                replaceUrl: true,
            });
        }
    }
}
