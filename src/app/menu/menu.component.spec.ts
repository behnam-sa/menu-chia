import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { MaterialModule } from 'src/material/material.module';
import { MenuComponent } from './menu.component';
import { MenuProviderService } from './services/menu-provider.service';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;
    let provider: jasmine.SpyObj<MenuProviderService>;

    beforeEach(() => {
        provider = jasmine.createSpyObj<MenuProviderService>(
            {},
            { menu$: of() }
        );
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MenuComponent],
            providers: [{ provide: MenuProviderService, useValue: provider }],
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
