import { TestBed, inject } from '@angular/core/testing';

import { DataUtilsService } from './data-utils.service';

describe('DataUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataUtilsService]
    });
  });

  it('should be created', inject([DataUtilsService], (service: DataUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
