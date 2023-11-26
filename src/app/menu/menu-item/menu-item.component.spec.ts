import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/material/material.module';
import { MenuSubitemComponent } from '../menu-subitem/menu-subitem.component';
import { MenuItemComponent } from './menu-item.component';

describe('MenuItemComponent', () => {
    let component: MenuItemComponent;
    let fixture: ComponentFixture<MenuItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MenuItemComponent, MenuSubitemComponent],
            imports: [MaterialModule],
        }).compileComponents();

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
