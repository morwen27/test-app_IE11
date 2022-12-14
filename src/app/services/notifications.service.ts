import { ComponentFactoryResolver, Injectable } from '@angular/core';
import {  timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotificationDirective } from '../directives/notification.directive';
import { NotificationComponent } from '../notification/notification.component';

const LIFE_TIME_NOTIFICATION = 5000;

@Injectable()
export class NotificationsService {  

  constructor(
    private readonly notificationDirective: NotificationDirective,
    private readonly resolver: ComponentFactoryResolver,
  ) {}

  showNotification(message: string, selector: string): void {
    this.notificationDirective.containerRef.clear();

    const notificationFactory = this.resolver.resolveComponentFactory(NotificationComponent);
    const notification =
      this.notificationDirective.containerRef.createComponent(notificationFactory);

    notification.instance.notification = {
      message: message,
      class: selector,
    };

    timer(LIFE_TIME_NOTIFICATION)
      .pipe(takeUntil(notification.instance.destroyed$))
      .subscribe(() => {
        this.notificationDirective.containerRef.clear();
      });
  }
}
