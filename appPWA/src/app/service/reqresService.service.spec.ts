/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReqresServiceService } from './reqresService.service';

describe('Service: ReqresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReqresServiceService]
    });
  });

  it('should ...', inject([ReqresServiceService], (service: ReqresServiceService) => {
    expect(service).toBeTruthy();
  }));
});
