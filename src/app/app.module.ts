import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonComponent } from './persons/component/person.component';
import { PersonContainerComponent } from './persons/container/person-container.component';
import { PersonService } from './services/person.service';
import { RefModalDirective } from './directives/ref-modal.directive';
import { ModalComponent } from './modal/modal.component';
import { NotificationsService } from './services/notifications.service';
import { NotificationDirective } from './directives/notification.directive';
import { NotificationComponent } from './notification/notification.component';
import { Interceptor } from './services/interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PersonContainerComponent,
    PersonComponent,
    ModalComponent,
    NotificationComponent,
    RefModalDirective,
    NotificationDirective,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [
    PersonService,
    NotificationsService,
    NotificationDirective,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
