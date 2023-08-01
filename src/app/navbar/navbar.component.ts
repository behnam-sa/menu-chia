import { ViewportScroller } from '@angular/common';
import {
    Component,
    ElementRef,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, filter, repeat, skip, takeUntil, tap } from 'rxjs';
import scrollIntoView from 'scroll-into-view-if-needed';
import { MenuSection } from '../menu/models/menu-section';
import { MenuProvider } from '../menu/services/menu-provider.service';
import { NavItemDirective } from './directives/nav-item.directive';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    @ViewChild('nav')
    public nav?: ElementRef<HTMLElement>;

    @ViewChildren('navItem', { read: NavItemDirective })
    public navItems?: QueryList<NavItemDirective>;

    public menu$ = this.menuProvider.menu$;
    public currentSection$ = this.route.fragment;

    private scrollStart$ = new Subject<void>();

    private putNavItemInView$ = this.currentSection$.pipe(
        tap((x) => console.log('currentSection$', x)),
        skip(1),
        filter((section): section is string => section !== null),
        takeUntil(
            this.scrollStart$.pipe(tap((x) => console.log('scrollStart$')))
        ),
        repeat({ delay: 1000 }),
        tap((x) => console.log('putNavItemInView$', x))
    );

    constructor(
        public menuProvider: MenuProvider,
        private route: ActivatedRoute,
        private scroller: ViewportScroller
    ) {
        this.putNavItemInView$.subscribe((sectionName) =>
            this.scrollToNavItem(sectionName)
        );
    }

    public scrollToSection(section: MenuSection) {
        this.scrollStart$.next();
        this.scroller.scrollToAnchor(section.caption);

        // setTimeout(() => this.scroller.scrollToAnchor(section.caption), 100);

        // scrollIntoView(document.getElementById(section.caption)!, {
        //     scrollMode: 'always',
        //     behavior: 'smooth',
        // });
    }

    private scrollToNavItem(sectionName: string): void {
        if (!this.navItems || !this.nav || !sectionName) return;

        const navItem = this.navItems.find(
            (navItem) => navItem.sectionName === sectionName
        );

        if (navItem?.element.nativeElement) {
            scrollIntoView(navItem?.element.nativeElement, {
                scrollMode: 'if-needed',
                behavior: 'smooth',
                block: 'nearest',
                boundary: this.nav.nativeElement,
            });
        }
    }
}
