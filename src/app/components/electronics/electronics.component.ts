import { Component, OnInit } from '@angular/core';
import { Product, Category } from 'src/app/grocerycomp';
import { LocalstoreService } from 'src/app/services/localstore.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

productList!:Product[];
categoryList!:Category[];
  constructor( private localstore:LocalstoreService) { }

  ngOnInit(): void {
    this.productList=this.localstore.getDataByCategory("Electronics");
  }

  
}
