import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';






@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterModule,MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
