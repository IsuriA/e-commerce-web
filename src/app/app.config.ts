import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHandlerFn, HttpRequest, HttpResponse, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { AuthService } from './services/auth/auth.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const customInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

  const authService = inject(AuthService);
  const token = authService.getAuthToken();

  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req)
    .pipe(
    // catchError((response: HttpErrorResponse) => {
    //   console.log(response);
    //   alert(response.message);

    //   return of(new HttpResponse({ body: response }));
    // })
  );
};

export const appConfig: ApplicationConfig = {
  providers: [
    AuthService,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([
      customInterceptorFn
    ])), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync('noop')
  ]
};
