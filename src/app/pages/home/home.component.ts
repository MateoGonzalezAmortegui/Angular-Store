import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = []

  constructor(
    private productsService:ProductsService
  ) {
  }

  limit=10;
  offset=0;

  ngOnInit():void{
    this.productsService.getProductByPage(this.limit,this.offset)
    .subscribe(data =>{
      this.products =data;
      this.offset += this.limit;
    })
  }

  loadMore(): void {
    this.productsService.getProductByPage(this.limit, this.offset)
      .subscribe(data => {
        this.products = data;
        this.offset += this.limit;
      });
  }
}
