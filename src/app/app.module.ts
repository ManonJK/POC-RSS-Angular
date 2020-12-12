import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
