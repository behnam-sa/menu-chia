import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/material/material.module';
import { MenuSubitem } from '../models/menu-subitem';
import { MenuItemComponent } from './menu-item.component';

@Component({ selector: 'app-menu-subitems', standalone: true })
class MenuSubitemsComponent {
    @Input() public subitems?: MenuSubitem[];
}

describe('MenuItemComponent', () => {
    let component: MenuItemComponent;
    let fixture: ComponentFixture<MenuItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MenuItemComponent],
        }).compileComponents();

        TestBed.overrideComponent(MenuItemComponent, {
            set: {
                imports: [MenuSubitemsComponent, MaterialModule],
            },
        });

        fixture = TestBed.createComponent(MenuItemComponent);
        component = fixture.componentInstance;
        component.item = { name: '' };
        component.section = { caption: '', iconPath: '', items: [] };

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
