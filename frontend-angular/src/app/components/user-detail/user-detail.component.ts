import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../Comfdelete/confirm-dialog.component';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, MatDialogModule], // Importa CommonModule, RouterModule y MatDialogModule
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User | null = null;
  dialog: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router // Inyecta el Router
  ) {}

  ngOnInit() {
    const userIdParam = this.route.snapshot.paramMap.get('id');

    if (userIdParam) {
      const userId = Number(userIdParam); // Conversión segura a número
      if (!isNaN(userId)) { // Verifica que sea un número válido
        this.userService.getUserById(userId.toString()).subscribe({
          next: (data) => this.user = data,
          error: (err) => console.error('Error al obtener usuario:', err)
        });
      } else {





        console.error('ID de usuario no válido:', userIdParam);
      }
    } else {
      console.error('No se encontró el ID del usuario en la ruta.');
    }
  }

  deleteUser(){



    if(this.user && this.user){
      this.userService.deleteUser(this.user.id).subscribe({
        next:()=>{
          console.log("usuario eliminado con exito");
          this.router.navigate(['/']);
        },
        error:(err)=>console.log("error al eliminar usuario", err)
      })
    }
  }

  goBack() {
    this.router.navigate(['/']); // Navega de vuelta a la lista de usuarios
  }
}
