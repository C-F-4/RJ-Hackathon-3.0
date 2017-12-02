import { TestBed, inject } from '@angular/core/testing';

import { MapsLoaderService } from './maps-loader.service';

describe('MapsLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapsLoaderService]
    });
  });

  it('should be created', inject([MapsLoaderService], (service: MapsLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
