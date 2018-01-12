import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { QuestionsPage} from '../pages/questions/questions';
import { DataService } from '../providers/data-service';
import { CompleteDetailPage } from '../pages/complete-detail/complete-detail';
import { Session } from '../providers/session';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    QuestionsPage,
    CompleteDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    QuestionsPage,
    CompleteDetailPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, DataService, Session],

})
export class AppModule { }
