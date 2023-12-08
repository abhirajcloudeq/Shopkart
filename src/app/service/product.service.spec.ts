import { TestBed } from '@angular/core/testing';

import { ProductCategories } from './product.service';

describe('ProductService', () => {
  let service: ProductCategories;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCategories);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
