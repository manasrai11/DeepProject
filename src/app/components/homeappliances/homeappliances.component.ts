import { Component, OnInit } from '@angular/core';
import { GrocerystoreService } from 'src/app/grocerystore.service';
import { Product,Category } from 'src/app/grocerycomp';
import { LocalstoreService } from 'src/app/services/localstore.service';

@Component({
  selector: 'app-homeappliances',
  templateUrl: './homeappliances.component.html',
  styleUrls: ['./homeappliances.component.css']
})
export class HomeappliancesComponent implements OnInit {
  // productList!: Product[];
  // CategoryList!: Category[];
  // DataList!:data[];
  productList!:Product[];
  constructor(private grocerystore: GrocerystoreService , private localstore:LocalstoreService) { }

  ngOnInit(): void {

  // this.DataList=this.grocerystore.getDataByCategory("Homeappliances");
  
  // this.LocalData = this.localstore.getCategories();
  this.productList=this.localstore.getDataByCategory("Home Appliances");

  
  }


}
