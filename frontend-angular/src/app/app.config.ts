import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    provideRouter(routes) // Habilitar el sistema de rutas en la app
  ]
};
