import { Injectable } from '@angular/core';
import { Product, Category } from './grocerycomp';



@Injectable({
  providedIn: 'root'
})
export class GrocerystoreService {

  constructor() { }
  my_store_data = {
    "categories": [
      {
        "id": 1,
        "categoryName": "Fruits",
        "linkName": "fruits"

      },
      {
        "id": 2,
        "categoryName": "Home Appliances",
        "linkName": "homeappliances"

      },
      {
        "id": 3,
        "categoryName": "Electronics",
        "linkName": "electronics"

      }

    ],
    "newdata": [
      {
        "categoryName": "Electronics",
        id: 1,
        Image: "../assets/imges/electric cooker.jpg",
        name: "electric cooker"
      },
      {
        "categoryName": "Electronics",
        id: 2,
        Image: "../assets/imges/electric cooker.jpg",
        name: "electric3 cooker"
      },
      {
        "categoryName": "fruits",
        id: 3,
        Image: "../assets/imges/electric cooker.jpg",
        name: "electric4 cooker"
      },
      {
        "categoryName": "Home Appliances",
        id: 4,
        Image: "../assets/imges/electric cooker.jpg",
        name: "electric2 cooker"
      },
      {
        "categoryName": "fruits",
        id: 5,
        Image: "../assets/imges/electric cooker.jpg",
        name: "electric2 cooker"
      },
      {
        "categoryName": "fruits",
        id: 6,
        Image: "../assets/imges/electric cooker.jpg",
        name: "electric2 cooker"
      },
      {
        "categoryName": "fruits",
        id: 7,
        Image: "../assets/imges/electric cooker.jpg",
        name: "electric2 cooker"
      },
      {
        "categoryName": "fruits",
        id: 8,
        Image: "../assets/imges/electric cooker.jpg",
        name: "electric2 cooker"
      }

    ]

  };

  getAllCategories(): Category[] {

    return <Category[]>this.my_store_data["categories"];
  }

  getAlldata(count?: any): Product[] {

    return <Product[]>this.my_store_data["newdata"].slice(0, count);
  }

  getDataByCategory(catName: string, count?: any): Product[] {

    return this.my_store_data["newdata"].filter((item) => { return item.categoryName == catName });

  }
}
