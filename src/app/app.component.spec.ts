import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/material/material.module';
import { AppComponent } from './app.component';

@Component({ selector: 'app-navbar', template: '', standalone: true })
class NavbarComponent {}

@Component({ selector: 'app-contact-link', template: '', standalone: true })
class ContactLinkComponent {}

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                NoopAnimationsModule,
                MaterialModule,
                NavbarComponent,
                ContactLinkComponent,
            ],
            declarations: [AppComponent],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
