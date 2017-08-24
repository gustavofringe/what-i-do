import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
export const firebaseConfig = {
    apiKey: "AIzaSyD9mtQ8vsTFqp-tdVLBZgvk83RicYlTJHg",
    authDomain: "angularfirebase-1cf3d.firebaseapp.com",
    databaseURL: "https://angularfirebase-1cf3d.firebaseio.com",
    projectId: "angularfirebase-1cf3d",
    storageBucket: "angularfirebase-1cf3d.appspot.com",
    messagingSenderId: "209746225879"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
