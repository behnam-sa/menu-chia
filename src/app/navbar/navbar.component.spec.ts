import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MaterialModule } from 'src/material/material.module';
import { MenuProvider } from '../menu/services/menu-provider.service';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;
    let provider: jasmine.SpyObj<MenuProvider>;

    beforeEach(() => {
        provider = jasmine.createSpyObj<MenuProvider>({}, { menu$: of() });
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavbarComponent],
            providers: [{ provide: MenuProvider, useValue: provider }],
        }).compileComponents();

        TestBed.overrideComponent(NavbarComponent, {
            set: {
                imports: [CommonModule, MaterialModule, RouterTestingModule],
            },
        });

        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
