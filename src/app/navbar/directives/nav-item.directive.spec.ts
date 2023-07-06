import { ElementRef } from '@angular/core';
import { NavItemDirective } from './nav-item.directive';

describe('NavItemDirective', () => {
    it('should create an instance', () => {
        const directive = new NavItemDirective(
            new ElementRef(document.createElement('span'))
        );
        expect(directive).toBeTruthy();
    });
});
