import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { AppComponent

 } from './app.component';

import { BrowserModule

 } from '@angular/platform-browser';

//  import { ApplicationConfig } from './app.config';

 @NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      // Other components
    ],
    imports: [
      BrowserModule
      
      // Other modules
    ],
    providers: []
    // bootstrap: [AppComponent]
  })
  export class AppModule { }
  