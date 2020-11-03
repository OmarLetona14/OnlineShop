import { Component, OnInit } from '@angular/core';
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
  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
  }

  createCategory(){
    
  }

}
