import { Component, OnInit } from '@angular/core';
import { GrocerystoreService } from 'src/app/grocerystore.service';
import { Product } from 'src/app/grocerycomp';
import { LocalstoreService } from 'src/app/services/localstore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList!: Product[];
  constructor(private groceryservice: GrocerystoreService, private localservice:LocalstoreService) { }

  ngOnInit(): void {
// this.dataList=this.groceryservice.getAlldata();
// this.dataList=this.groceryservice.getDataByCategory("fruits");
this.productList=this.localservice.getAlldata(12);

  }



}
