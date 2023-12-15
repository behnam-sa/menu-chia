import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/material/material.module';
import { MenuSectionComponent } from './menu-section.component';

@Component({ selector: 'app-menu-item', standalone: true })
class MenuItemComponent {}

describe('MenuSectionComponent', () => {
    let component: MenuSectionComponent;
    let fixture: ComponentFixture<MenuSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MenuSectionComponent],
        }).compileComponents();

        TestBed.overrideComponent(MenuSectionComponent, {
            set: {
                imports: [
                    MenuItemComponent,
                    MaterialModule,
                    RouterTestingModule,
                ],
            },
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
