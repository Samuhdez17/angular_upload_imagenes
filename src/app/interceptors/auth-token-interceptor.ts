import { HttpInterceptorFn } from '@angular/common/http';
import { SKIP_TOKEN } from '../utils/token.context';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(SKIP_TOKEN)) {
    console.log('SKIP_TOKEN is set, skipping auth token interceptor');
    return next(req)
  }

  const token = sessionStorage.getItem('TOKEN')
  console.log('authTokenInterceptor: token from localStorage: ', token)

  if (token) {
    // Acciones con token (clonar peticion)
    const tokenReq = req.clone({
      setHeaders: {
        Authorization: `bearer ${token}`
      }
    })

    return next(tokenReq)

  } else {
    // Acciones sin token
  }

  return next(req)
};
