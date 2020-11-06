import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import {CategoriesService} from '../../services/categories.service'

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  
  category:Category = {
    idProduct_category: 0,
    category_name: ""
  }
  constructor(private categoriesService:CategoriesService, private router:Router) { }

  ngOnInit(): void {
  }

  createCategory(){
    delete this.category.idProduct_category
    this.categoriesService.saveCategory(this.category).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/categories'])
      },
      err =>{
        console.error(err);
      }
    )
  }

}
