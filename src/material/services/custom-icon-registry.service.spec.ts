import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';
import { CustomIconRegistry } from './custom-icon-registry.service';

describe('CustomIconRegistry', () => {
    let service: CustomIconRegistry;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MatIconModule, HttpClientTestingModule],
        });
        service = TestBed.inject(CustomIconRegistry);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
