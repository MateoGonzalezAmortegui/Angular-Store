import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/models/product.module';

import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/product.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  activeMenu: boolean = false;

  toggleSideBar() {
    this.activeMenu = !this.activeMenu;
  }

  shoppingCart:Product[]=[];
  constructor(
    private storeService :StoreService,
    private categoriesService:CategoriesService
  ){
    this.shoppingCart = storeService.getShoppingCart();
  }

  ngOnInit(){
    this.getAllCategories();
  }

  categories:Category[]=[]
  getAllCategories(){
    this.categoriesService.getAll().subscribe(data=>{
      this.categories = data
    })
  }
}
