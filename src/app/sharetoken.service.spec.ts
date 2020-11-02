import { TestBed } from '@angular/core/testing';

import { SharetokenService } from './sharetoken.service';

describe('SharetokenService', () => {
  let service: SharetokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharetokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
