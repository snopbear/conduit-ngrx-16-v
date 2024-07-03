/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersistanceService } from './persistance.service';

describe('Service: Persistance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersistanceService]
    });
  });

  it('should ...', inject([PersistanceService], (service: PersistanceService) => {
    expect(service).toBeTruthy();
  }));
});
