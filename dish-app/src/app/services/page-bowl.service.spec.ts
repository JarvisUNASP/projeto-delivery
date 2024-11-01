import { TestBed } from '@angular/core/testing';

import { PageBowlService } from './page-bowl.service';

describe('PageBowlService', () => {
  let service: PageBowlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageBowlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
