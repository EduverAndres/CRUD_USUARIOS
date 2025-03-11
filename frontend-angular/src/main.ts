import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()), // ✅ Soporte para input binding en rutas
    provideHttpClient() // ✅ Cliente HTTP habilitado
  ]
}).catch(err => console.error('❌ Error al iniciar la aplicación:', err));