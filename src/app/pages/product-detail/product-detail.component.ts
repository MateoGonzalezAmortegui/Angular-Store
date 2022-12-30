import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.module';

import { Location } from '@angular/common';


import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{


  productId: string|null=null
  product: Product|null = null
  products: Product = {
    id: '',
    title: '',
    price: 0,
    images: [],
    description: '',
    category: {
      id:'',
      name:''
    },
  };
  constructor(
    private route: ActivatedRoute,
    private productsService:ProductsService,
    private location:Location,

    private storeService:StoreService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.productId = params.get('id')
      if (this.productId) {
        this.productsService.getProduct(this.productId)
        .subscribe(data=>{
          this.product=data
          this.products=data
        })
      }
      return [null]
    })
  }

  goToBack(){
    this.location.back()
  }

  onAddToShoppingCart(){
    this.storeService.AddToShoppingCart(this.products);
  }
}
