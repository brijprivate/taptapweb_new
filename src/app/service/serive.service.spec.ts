import { TestBed } from '@angular/core/testing';

import { SeriveService } from './serive.service';

describe('SeriveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeriveService = TestBed.get(SeriveService);
    expect(service).toBeTruthy();
  });
});
