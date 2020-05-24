import { TestBed } from '@angular/core/testing';

import { ManagedocsService } from './managedocs.service';

describe('ManagedocsService', () => {
  let service: ManagedocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagedocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
