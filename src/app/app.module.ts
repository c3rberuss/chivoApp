import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//menus
import { TabsPage } from "../pages/tabs/tabs";

//paginas
import { HomePage } from '../pages/home/home';
import { DepartmentsPage } from "../pages/departments/departments"
import { LoginPage } from "../pages/login/login";
import { AboutPage } from '../pages/about/about';
import { DepartmentDetailPage } from "../pages/department-detail/department-detail";
import { PalabrasPage } from "../pages/palabras/palabras";
import { CategoriasListPage } from '../pages/categorias-list/categorias-list';
import { PalabraDetailPage } from '../pages/palabra-detail/palabra-detail';
import { CategoriasPage } from '../pages/categorias/categorias';
import { PalabrasListPage } from '../pages/palabras-list/palabras-list';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { DatabaseProvider } from '../providers/database/database';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { MessageProvider } from '../providers/message/message';

import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { SocialSharing } from '@ionic-native/social-sharing';

export const firebaseConfig = {
  apiKey: "AIzaSyAQR0lmoWFN2PThw0QnuIzjsKMwcQAgClg",
  authDomain: "chivoapp.firebaseapp.com",
  databaseURL: "https://chivoapp.firebaseio.com",
  storageBucket: "chivoapp.appspot.com",
  messagingSenderId: '326875584645',
  projectId: "chivoapp"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    DepartmentsPage, //se deben de importar las pagina aqui
    LoginPage,
    AboutPage,
    DepartmentDetailPage,
    PalabrasPage,
    PalabraDetailPage,
    CategoriasListPage,
    CategoriasPage,
    PalabrasListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    DepartmentsPage, //se deben de importar las pagina aqui
    LoginPage,
    AboutPage,
    DepartmentDetailPage,
    PalabrasPage,
    PalabraDetailPage,
    CategoriasListPage,
    CategoriasPage,
    PalabrasListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    AngularFireDatabase,
    UsuarioProvider,
    Facebook,
    GooglePlus,
    MessageProvider,
    SocialSharing
  ]
})
export class AppModule {}
