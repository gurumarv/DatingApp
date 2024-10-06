import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ModalModule } from 'ngx-bootstrap/modal';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    ModalModule 
  ]
})
.catch((err) => console.error(err));
