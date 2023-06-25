import { TestBed } from '@angular/core/testing';

import { MenuProviderService } from './menu-provider.service';

describe('MenuProviderService', () => {
    let service: MenuProviderService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MenuProviderService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
