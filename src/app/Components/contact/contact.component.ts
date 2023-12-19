import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    imports: [CommonModule, NavBarComponent, FooterComponent]
})
export class ContactComponent {
    imageUrl: string = 'assets/sean-pollock-PhYq704ffdA-unsplash.jpg';
}
