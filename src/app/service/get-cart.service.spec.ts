import { TestBed } from '@angular/core/testing';

import { CartService } from './get-cart.service';

describe('GetCartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
