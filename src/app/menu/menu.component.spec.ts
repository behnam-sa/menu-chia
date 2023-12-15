import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { MaterialModule } from 'src/material/material.module';
import { MenuComponent } from './menu.component';
import { MenuProvider } from './services/menu-provider.service';

@Component({ selector: 'app-navbar', standalone: true })
class NavbarComponent {}

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;
    let provider: jasmine.SpyObj<MenuProvider>;

    beforeEach(() => {
        provider = jasmine.createSpyObj<MenuProvider>({}, { menu$: of() });
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MenuComponent, NoopAnimationsModule],
            providers: [{ provide: MenuProvider, useValue: provider }],
        }).compileComponents();

        TestBed.overrideComponent(MenuComponent, {
            set: {
                imports: [CommonModule, MaterialModule, NavbarComponent],
            },
        });

        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
