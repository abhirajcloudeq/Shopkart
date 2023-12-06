// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './prod-detail.component.html',
})
export class ProductListComponent implements OnInit {
  product: any[] = [];
  selectedCategory: string ='';
  categoryMap: any = {"accessories": 1, "electronics": 2}

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit() {
    debugger;
    this.route.paramMap.subscribe(params => {
      this.selectedCategory = this.categoryMap[params.get('id') || '']
    })
    this.loadProducts();

  }

  loadProducts() {
    debugger;
    this.productService.getProducts(this.selectedCategory).subscribe((data) => {

      this.product = data;
      this.sortProductsById();
    });
  }

  private sortProductsById() {
    this.product.sort((a, b) => a.id - b.id);
  }

  onCategorySelect(category: string) {
    this.selectedCategory = category;
    this.loadProducts();
  }
}
