import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpEvent, HttpHandlerFn, HttpRequest, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth/auth.service';

export const customInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

    const authService = inject(AuthService);
    const token = authService.getAuthToken();

      if (token) {
        req = req.clone({
            setHeaders: { Authorization: `Bearer ${token}`}
        });
      }

    return next(req);
};

export const appConfig: ApplicationConfig = {
  providers: [
    AuthService,
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes,), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([
        customInterceptorFn
      ]))
  ]
};
