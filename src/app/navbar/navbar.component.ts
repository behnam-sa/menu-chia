import { ViewportScroller } from '@angular/common';
import {
    Component,
    ElementRef,
    OnDestroy,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription, filter, first, repeat, takeUntil } from 'rxjs';
import scrollIntoView from 'scroll-into-view-if-needed';
import { MenuSection } from '../menu/models/menu-section';
import { MenuProvider } from '../menu/services/menu-provider.service';
import { NavItemDirective } from './directives/nav-item.directive';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
    @ViewChild('nav')
    public nav?: ElementRef<HTMLElement>;

    @ViewChildren('navItem', { read: NavItemDirective })
    public navItems?: QueryList<NavItemDirective>;

    public menu$ = this.menuProvider.menu$;
    public currentSection$ = this.route.fragment;

    private scrollStart$ = new Subject<void>();

    private tryPutNavItemInView$ = this.route.fragment.pipe(
        filter((fragment): fragment is string => Boolean(fragment))
    );
    private putNavItemInView$ = this.tryPutNavItemInView$.pipe(
        takeUntil(this.scrollStart$),
        repeat({ delay: 500 })
    );

    private menuSubscription?: Subscription;

    constructor(
        public menuProvider: MenuProvider,
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private route: ActivatedRoute,
        private scroller: ViewportScroller
    ) {
        this.menu$
            .pipe(first())
            .subscribe((menu) =>
                this.registerIcons(
                    menu.sections.map((section) => section.iconPath)
                )
            );

        this.putNavItemInView$.subscribe((sectionName) =>
            this.scrollToNavItem(sectionName)
        );
    }

    public ngOnDestroy(): void {
        this.menuSubscription?.unsubscribe();
    }

    public scrollToSection(section: MenuSection) {
        this.scrollStart$.next();
        this.scroller.scrollToAnchor(section.caption);
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

    private registerIcons(iconPaths: string[]): void {
        for (const iconPath of iconPaths) {
            this.matIconRegistry.addSvgIcon(
                iconPath,
                this.domSanitizer.bypassSecurityTrustResourceUrl(
                    `/assets/category/${iconPath}`
                )
            );
        }
    }
}
