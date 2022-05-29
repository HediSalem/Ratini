import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppRate } from "@ionic-native/app-rate/ngx";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {AngularFirestoreModule} from "@angular/fire/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBtAOFRbxa7tLyP-FwaJWvqAMwuDSAJ7T0",
  authDomain: "ratini-df179.firebaseapp.com",
  projectId: "ratini-df179",
  storageBucket: "ratini-df179.appspot.com",
  messagingSenderId: "759632213697",
  appId: "1:759632213697:web:85cba4afefd6ba3b238640",
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,AngularFirestoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppRate,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
