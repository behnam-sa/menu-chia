import { CommonModule, ViewportScroller } from '@angular/common';
import {
    Component,
    ElementRef,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subject, filter, repeat, skip, takeUntil } from 'rxjs';
import { MaterialModule } from 'src/material/material.module';
import { MenuSection } from '../menu/models/menu-section';
import { MenuProvider } from '../menu/services/menu-provider.service';
import { NavItemComponent } from './nav-item/nav-item.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule, MaterialModule, NavItemComponent],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    @ViewChild('nav')
    public nav?: ElementRef<HTMLElement>;

    @ViewChildren('navItem')
    public navItems?: QueryList<NavItemComponent>;

    public menu$ = this.menuProvider.menu$;
    public currentSection$ = this.route.fragment;

    private scrollStart$ = new Subject<void>();

    private putNavItemInView$ = this.currentSection$.pipe(
        skip(1),
        filter((section): section is string => section !== null),
        takeUntil(this.scrollStart$),
        repeat({ delay: 1000 })
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
    }

    private scrollToNavItem(sectionName: string): void {
        if (!this.navItems || !this.nav || !sectionName) return;

        const navItem = this.navItems.find(
            (navItem) => navItem.section.caption === sectionName
        );

        navItem?.scrollIntoView(this.nav);
    }
}
