import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';
import { EditService } from '../../service/edit-service.service';

@Component({
  selector: 'app-profile',
  standalone:true,
  imports:[FormsModule,NavBarComponent,FooterComponent,CommonModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  showUpdateButton = false;

  profile = { 
    timezone: '', 
    firstname: '', 
    lastname: '', 
    phone: '987654321', 
    email: ''
  };

  editedProfile = { ...this.profile };
  editMode = false;
  userId: string | null = null;

  constructor(private editService: EditService) {}

  ngOnInit(): void {
    this.profile.firstname = localStorage.getItem("firstName") || '';
    this.profile.lastname = localStorage.getItem("lastName") || '';
    this.profile.email = localStorage.getItem("email") || '';
    this.userId = localStorage.getItem("userId");
    this.editedProfile = { ...this.profile };
  }

  onClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const isInputField = target.tagName === 'INPUT';

    if (!isInputField) {
      this.showUpdateButton = false;
    }
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  onEditClick(): void {
    this.toggleEditMode();
  }

  saveChanges(): void {
    this.profile = { ...this.editedProfile };
    if (this.userId) {
      this.editService.updateDetails(this.editedProfile, parseInt(this.userId, 10)).subscribe(
        response => {
          console.log('Profile updated successfully:', response);
        },
        error => {
          console.error('Error updating profile:', error);
        }
      );
    }
    this.toggleEditMode();
  }

  cancelEdit(): void {
    this.editedProfile = { ...this.profile };
    this.toggleEditMode();
  }
}
