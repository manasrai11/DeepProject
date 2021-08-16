import { Component, OnInit } from '@angular/core';
import { GrocerystoreService } from 'src/app/grocerystore.service';
import {  Product } from 'src/app/grocerycomp';
import { LocalstoreService } from 'src/app/services/localstore.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  productList!: Product[];
  
  
  constructor(private groceryservice: GrocerystoreService, private localstore:LocalstoreService) { }

  ngOnInit(): void {  
    // this.productList = this.groceryservice.getAllProducts();
    // this.CategoryList=this.groceryservice.getAllCategories();
    // this.productList=this.groceryservice.getDataByCategory("fruits");
    this.productList=this.localstore.getDataByCategory("fruits");
  }


}
