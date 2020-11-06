import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories:any = [];

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe(
      res =>{
        this.categories = res;
      },
      err =>{
        console.error(err)
      }
    )
  }

}
