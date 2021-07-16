import { TestBed } from '@angular/core/testing';

import { MyFirstPageService } from './my-first-page.service';

describe('MyFirstPageService', () => {
  let service: MyFirstPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFirstPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
