import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categories:any = []

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(
      res=>{
        this.categories = res;
      },
      err => {
        console.error(err)
      }
    );
  }

}
