 import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryService} from '../../service/apidata.service';
import { Category } from '../../Interface/category';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from "../nav-bar/nav-bar.component";


@Component({
    selector: 'app-home2',
    standalone: true,
    templateUrl: './home2.component.html',
    imports: [CommonModule, RouterModule, RouterLink, FooterComponent, NavBarComponent]
})
export class Home2Component implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
   

    this.categoryService.getCategories().subscribe(
      (data) => {
        console.log("data" , data)
        this.categories = data.data;
      },
      
    );
  }
  
 
}
