import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/material/material.module';
import { MenuSectionComponent } from './menu-section.component';

describe('MenuSectionComponent', () => {
    let component: MenuSectionComponent;
    let fixture: ComponentFixture<MenuSectionComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MenuSectionComponent],
            imports: [MaterialModule, RouterTestingModule],
        });
        fixture = TestBed.createComponent(MenuSectionComponent);
        component = fixture.componentInstance;
        component.section = { caption: '', iconPath: '', items: [] };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
