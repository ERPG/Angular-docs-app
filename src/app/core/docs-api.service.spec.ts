import { TestBed } from '@angular/core/testing';

import { DocsApiService } from './docs-api.service';

describe('DocsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocsApiService = TestBed.get(DocsApiService);
    expect(service).toBeTruthy();
  });
});
