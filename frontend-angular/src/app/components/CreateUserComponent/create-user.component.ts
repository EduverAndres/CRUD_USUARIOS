import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  user: User = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    job_title: '',
    company: '',
    photo_url: ''
  };

  constructor(
    public dialogRef: MatDialogRef<CreateUserComponent>,
    private userService: UserService // Inyectar el servicio de usuarios
  ) {}

  onSubmit() {
    if (this.user.name && this.user.email && this.user.phone && this.user.address && this.user.job_title && this.user.company && this.user.photo_url) {
      this.userService.createUser(this.user).subscribe(newUser => {
        this.dialogRef.close(newUser);
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
