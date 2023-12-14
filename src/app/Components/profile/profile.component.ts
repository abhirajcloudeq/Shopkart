import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    imports: [CommonModule, NavBarComponent, FooterComponent,FormsModule]
})
export class ProfileComponent {

  showUpdateButton = false;

  onClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const isInputField = target.tagName === 'INPUT';

  if (!isInputField) {
    this.showUpdateButton = false;
  }
}

  

    profile = {timezone:'', firstname: 'xyz',lastname: 'xyz', phone: '987654321', email: 'john@example.com' };
    editedProfile = { ...this.profile };
    editMode = false;
  
    toggleEditMode(): void {
      this.editMode = !this.editMode;
    }
  
    saveChanges(): void {
      // Apply changes to the profile, e.g., send data to the server
      this.profile = { ...this.editedProfile };
      this.toggleEditMode(); // Exit edit mode
    }
  
    cancelEdit(): void {
      this.editedProfile = { ...this.profile }; // Reset edited data
      this.toggleEditMode(); // Exit edit mode
    }

}
