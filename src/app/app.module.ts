import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './game-catalog/views/main/main.component';
import { NotFoundComponent } from './global/views/not-found/not-found.component';
import { HeaderDesktopComponent } from './global/components/header-desktop/header-desktop.component';
import { HeaderMobileComponent } from './global/components/header-mobile/header-mobile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    HeaderDesktopComponent,
    HeaderMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
