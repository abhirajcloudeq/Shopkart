import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    imports: [CommonModule, NavBarComponent, FooterComponent,RouterLink]
})
export class AboutComponent {
    imageUrl: string = 'assets/about-us.jpg';
}
