import { TestBed } from '@angular/core/testing';

import { ProductServ } from './productdescription.service';
describe('ProductdescriptionService', () => {
  let service: ProductServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
