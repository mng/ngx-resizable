import { TestBed } from '@angular/core/testing';

import { NgxResizableService } from './ngx-resizable.service';

describe('NgxResizableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxResizableService = TestBed.get(NgxResizableService);
    expect(service).toBeTruthy();
  });
});
