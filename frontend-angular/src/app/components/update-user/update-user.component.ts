import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService: UserService // Inyectar el servicio de usuarios
  ) {}

  onSubmit() {
    this.userService.updateUser(this.data.id, this.data).subscribe(updatedUser => {
      this.dialogRef.close(updatedUser);
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
