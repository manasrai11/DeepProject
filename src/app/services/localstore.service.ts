import { Injectable } from '@angular/core';
import { Category, Product,  } from '../grocerycomp';


@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {

  constructor() {
    let Storedata={
      "categories": [
        {
          "id": 1,
          "categoryName": "Fruits"
        },
        {
          "id": 2,
          "categoryName": "Home Appliances"
        },
        {
          "id": 3,
          "categoryName": "Electronics"
        }
    
      ],
      "products": [
        {
          "categoryName": "Home Appliances",
          id: 1,
          Image: "../assets/imges/electric cooker.jpg",
          name: "Electric Cooker"
        },
        {
          "categoryName": "Home Appliances",
          id: 2,
          Image: "../assets/imges/chair.jpg",
          name: "Chair"
        },
        {
          "categoryName": "Home Appliances",
          id: 3,
          Image: "../assets/imges/fridge.jpg",
          name: "Fridge"
        },
        {
          "categoryName": "Home Appliances",
          id: 4,
          Image: "../assets/imges/stove2.jpg",
          name: "Stove"
        },
        {
          "categoryName": "fruits",
          id: 5,
          Image: "../assets/imges/orange.jpg",
          name: "orange"
        },
        {
          "categoryName": "fruits",
          id: 6,
          Image: "../assets/imges/apple.jpg",
          name: "Apple"
        },
        {
          "categoryName": "fruits",
          id: 7,
          Image: "../assets/imges/chees.jpg",
          name: "Cheese"
        },
        {
          "categoryName": "fruits",
          id: 8,
          Image: "../assets/imges/strawberry.jpg",
          name: "Strawberry"
        },
        {
          "categoryName": "Electronics",
          id: 9,
          Image: "../assets/imges/mobile2.jpg",
          name: "Samsung"
        },
        {
          "categoryName": "Electronics",
          id: 10,
          Image: "../assets/imges/mobile3.jpg",
          name: "Mouse"
        },
        {
          "categoryName": "Electronics",
          id: 11,
          Image: "../assets/imges/iphone.jpg",
          name: "Iphone"
        },
        {
          "categoryName": "Electronics",
          id: 12,
          Image: "../assets/imges/applemouse.jpg",
          name: "Apple Mouse"
        },
        {
          "categoryName": "Electronics",
          id: 13,
          Image: "../assets/imges/watch5.jpg",
          name: "Awesome Watch"
        },
        {
          "categoryName": "Electronics",
          id: 14,
          Image: "../assets/imges/camera.jpg",
          name: "Camera"
        },
        {
          "categoryName": "Electronics",
          id: 15,
          Image: "../assets/imges/watch.jpg",
          name: "Watch"
        },
        {
          "categoryName": "Electronics",
          id: 16,
          Image: "../assets/imges/camera.jpg",
          name: "Camera"
        },



  
      ]
    
    };
    localStorage.setItem("category",JSON.stringify(Storedata.categories) );
    localStorage.setItem("products",JSON.stringify(Storedata.products) );



   }

  ngOnInit(): void{}



  getCategories():Category[]{
  let retVal = localStorage.getItem("category");
  let jsonVal = JSON.parse (<string> retVal);
  return <Category[]>jsonVal;
  
 }
  getProducts():Product[]{
    let products = localStorage.getItem("products");
    let jsonpro =JSON.parse(<string> products);
    return <Product[]>jsonpro;
  }

  getAlldata(count?: any): Product[] {

    return <Product[]>JSON.parse(<string>localStorage.getItem("products")).slice(0, count);
  }

  getDataByCategory(catName: string, count?: any): Product[] {
    return JSON.parse(<string> localStorage.getItem("products")).filter((item: Product) => { return item.categoryName == catName });
   
    // let jsonpro =JSON.parse(<string> localStorage.getItem("products"));
    // return jsonpro.filter((item: data) => { return item.categoryName == catName });
   
   
    // return this.my_store_data["newdata"].filter((item) => { return item.categoryName == catName });

  }


}
