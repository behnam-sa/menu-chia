import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MenuProviderService } from './menu-provider.service';

describe('MenuProviderService', () => {
    let service: MenuProviderService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(MenuProviderService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
