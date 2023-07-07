import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../models/menu-item';
import { MenuSection } from '../models/menu-section';

@Component({
    selector: 'app-menu-section',
    templateUrl: './menu-section.component.html',
    styleUrls: ['./menu-section.component.scss'],
})
export class MenuSectionComponent implements AfterViewInit, OnDestroy {
    @Input({ required: true })
    public section!: MenuSection;

    private observer?: IntersectionObserver;

    constructor(private element: ElementRef, private router: Router) {}

    public ngAfterViewInit(): void {
        this.observer = new IntersectionObserver(
            (entries) => this.observationEvent(entries),
            {
                rootMargin: '-30% 0px -70% 0px',
                threshold: 0,
            }
        );
        this.observer.observe(this.element.nativeElement);
    }

    public ngOnDestroy(): void {
        this.observer?.disconnect();
    }

    public getThumbnail(item: MenuItem, width: number, extension: string) {
        const url = `assets/menu/compressed/${item.imagePath}-${width}.${extension}`;
        return encodeURI(url);
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
