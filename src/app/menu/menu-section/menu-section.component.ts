import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { MenuSection } from '../models/menu-section';

@Component({
    selector: 'app-menu-section',
    templateUrl: './menu-section.component.html',
    styleUrls: ['./menu-section.component.scss'],
})
export class MenuSectionComponent implements AfterViewInit, OnDestroy {
    @Input({ required: true })
    public section!: MenuSection;

    private intersectionObserver?: IntersectionObserver;

    private readonly intersectionConfig: IntersectionObserverInit = {
        rootMargin: '-30% 0px -70% 0px',
        threshold: 0,
    };

    constructor(
        private element: ElementRef,
        private router: Router
    ) {}

    public ngAfterViewInit(): void {
        this.intersectionObserver = new IntersectionObserver(
            (entries) => this.observationEvent(entries),
            this.intersectionConfig
        );
        this.intersectionObserver.observe(this.element.nativeElement);
    }

    public ngOnDestroy(): void {
        this.intersectionObserver?.disconnect();
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
