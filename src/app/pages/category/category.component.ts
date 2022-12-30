import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.module';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  products: Product[] = []
  categoryId: string|null=null
  limit=10;
  offset=0;
  constructor(
    private route: ActivatedRoute,
    private productsService:ProductsService
  ){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.categoryId = params.get('id')
      if (this.categoryId) {
        this.productsService.getByCategory(this.categoryId,this.limit,this.offset)
        .subscribe(data=>{
          this.products=data
        })
      }
    })
  }

  loadMore(): void {
    this.route.paramMap.subscribe(params=>{
      this.categoryId = params.get('id')
      if (this.categoryId) {
        this.offset += this.limit;
        this.productsService.getByCategory(this.categoryId,this.limit,this.offset)
        .subscribe(data=>{
          this.products=data
        })
      }
    })
  }

}
