import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/grocerycomp';
import { GrocerystoreService } from 'src/app/grocerystore.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  CategoryList!: Category[];
public isCollapsed = true;

  constructor(public router:Router , private groceryservice: GrocerystoreService) { }

  ngOnInit(): void {
    this.CategoryList=this.groceryservice.getAllCategories();
  }

  

  // isComponentRenderable() {
  //   return this.router.url !== "/signup" 
    
  //   // && this.router.url !== "/signup";
   

  //   //return this.router.url === "/" || this.router.url === "/categories";
  // }

}
