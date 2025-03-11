import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { CreateUserComponent } from '../CreateUserComponent/create-user.component';
import { ConfirmDialogComponent } from '../Comfdelete/confirm-dialog.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule], // Importa CommonModule, RouterModule y MatDialogModule
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  navigateToDetail(userId: number) {
    this.router.navigate(['/user', userId]);
  }

  deleteUser(userId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(userId).subscribe(() => {
          this.users = this.users.filter(user => user.id !== userId);
        });
      }
    });
  }

  openUpdateModal(user: User) {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadUsers(); // Recargar la lista de usuarios después de la actualización
      }
    });
  }

  openCreateModal() {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadUsers(); // Recargar la lista de usuarios después de la creación
      }
    });
  }
}
