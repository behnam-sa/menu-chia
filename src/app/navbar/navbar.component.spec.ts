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

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            providers: [{ provide: MenuProvider, useValue: provider }],
            imports: [MaterialModule, RouterTestingModule],
        });
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
