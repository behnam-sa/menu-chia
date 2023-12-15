import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import scrollIntoView from 'scroll-into-view-if-needed';
import { MenuSection } from 'src/app/menu/models/menu-section';
import { MaterialModule } from 'src/material/material.module';

@Component({
    selector: 'app-nav-item',
    standalone: true,
    imports: [CommonModule, MaterialModule],
    templateUrl: './nav-item.component.html',
    styleUrl: './nav-item.component.scss',
})
export class NavItemComponent {
    @Input({ required: true })
    public section!: MenuSection;

    @Input()
    public active?: boolean;

    @Output()
    public click = new EventEmitter<void>();

    public constructor(public elementRef: ElementRef<HTMLElement>) {}

    public scrollIntoView(boundary: ElementRef<HTMLElement>): void {
        if (this.elementRef.nativeElement) {
            scrollIntoView(this.elementRef.nativeElement, {
                scrollMode: 'if-needed',
                behavior: 'smooth',
                block: 'nearest',
                boundary: boundary.nativeElement,
            });
        }
    }
}
