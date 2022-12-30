import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.module';

import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  shoppingCart:Product[]=[];
  total:number=0;
  size:number=0;

  @Input() products: Product[] = []

  constructor(
    private storeService:StoreService,
    private productsService:ProductsService
  ) {
    this.shoppingCart = storeService.getShoppingCart();
  }

  onAddToShoppingCart(product:Product){
    this.storeService.AddToShoppingCart(product);
    this.total = this.storeService.getTotal();
    this.size = this.shoppingCart.length;
  }

  today = new Date();

          //*variable
  @Output() onLoadMore = new EventEmitter<string>();

  loadMore() {
    this.onLoadMore.emit();
  }
}
