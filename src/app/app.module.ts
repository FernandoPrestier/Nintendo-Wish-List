import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent as MainComponentCatalog  } from './game-catalog/views/main/main.component';
import { NotFoundComponent } from './global/views/not-found/not-found.component';
import { HeaderDesktopComponent } from './global/components/header-desktop/header-desktop.component';
import { HeaderMobileComponent } from './global/components/header-mobile/header-mobile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './game-catalog/components/banner/banner.component';
import { BreadCrumbComponent } from './game-catalog/components/bread-crumb/bread-crumb.component';
import { FilterComponent } from './game-catalog/components/filter/filter.component';
import { ItemCatalogComponent } from './game-catalog/components/item-catalog/item-catalog.component';
import { FooterComponent } from './global/components/footer/footer.component';
import { MainComponent as MainComponentWhish } from './whish-list-car/views/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentCatalog,
    MainComponentCatalog,
    MainComponentWhish,
    HeaderDesktopComponent,
    HeaderMobileComponent,
    BannerComponent,
    BreadCrumbComponent,
    FilterComponent,
    ItemCatalogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
