import { TestBed } from '@angular/core/testing';

import { TovarServiceService } from './tovar-service.service';

describe('TovarServiceService', () => {
  let service: TovarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TovarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
