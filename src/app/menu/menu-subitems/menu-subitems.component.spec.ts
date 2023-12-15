import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuSubitemsComponent } from './menu-subitems.component';

describe('MenuSubitemsComponent', () => {
    let component: MenuSubitemsComponent;
    let fixture: ComponentFixture<MenuSubitemsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MenuSubitemsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MenuSubitemsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
