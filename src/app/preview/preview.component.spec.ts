import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MenuProvider } from '../menu/services/menu-provider.service';
import { PreviewComponent } from './preview.component';

describe('PreviewComponent', () => {
    let component: PreviewComponent;
    let fixture: ComponentFixture<PreviewComponent>;
    let provider: jasmine.SpyObj<MenuProvider>;

    beforeEach(() => {
        provider = jasmine.createSpyObj<MenuProvider>({}, { menu$: of() });
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PreviewComponent, RouterTestingModule],
            providers: [{ provide: MenuProvider, useValue: provider }],
        }).compileComponents();

        fixture = TestBed.createComponent(PreviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
