import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { MaterialModule } from 'src/material/material.module';
import { MenuComponent } from './menu.component';
import { MenuProvider } from './services/menu-provider.service';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;
    let provider: jasmine.SpyObj<MenuProvider>;

    beforeEach(() => {
        provider = jasmine.createSpyObj<MenuProvider>(
            {},
            { menu$: of() }
        );
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MenuComponent],
            providers: [{ provide: MenuProvider, useValue: provider }],
            imports: [MaterialModule],
        });
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
