import { Injectable } from '@angular/core';
import { Product } from '../models/product.module';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private MyShoppingCart:Product[]=[];

  constructor() { }

  AddToShoppingCart(product:Product){
    this.MyShoppingCart.push(product);
  }

  getTotal(){
    return this.MyShoppingCart.reduce((sum, item)=> sum + item.price, 0);
  }

  getShoppingCart(){
    return this.MyShoppingCart;
  }
}
