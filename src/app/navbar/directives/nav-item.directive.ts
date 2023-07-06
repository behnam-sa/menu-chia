import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appNavItem]',
})
export class NavItemDirective {
    @Input({ required: true })
    public sectionName!: string;

    constructor(public element: ElementRef<HTMLElement>) {}
}
