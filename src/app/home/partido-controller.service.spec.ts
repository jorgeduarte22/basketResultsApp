import { TestBed } from '@angular/core/testing';

import { PartidoControllerService } from './partido-controller.service';

describe('PartidoControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartidoControllerService = TestBed.get(PartidoControllerService);
    expect(service).toBeTruthy();
  });
});
