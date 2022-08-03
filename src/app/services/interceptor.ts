import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ResponseSelectors, ResponseStatus } from "../models/response-status";
import { NotificationsService } from "./notifications.service";

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(
    private readonly notificationsService: NotificationsService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse && event.ok) {
          this.notificationsService.showNotification(ResponseStatus[200], ResponseSelectors[1])
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.notificationsService.showNotification(ResponseStatus[error.status], ResponseSelectors[2])
        
        return throwError(error);
      })
    )
  }
  
}