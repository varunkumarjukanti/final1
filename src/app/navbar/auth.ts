import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
@Injectable()
export class fwcAPIInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  const auth = req.clone({
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Auth-Token': 'jwtToken'
    })
  });



  return next.handle(auth);
  }}   