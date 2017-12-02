import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { StateLandingComponent } from './state-landing/state-landing.component';

import { DataUtilsService } from './utilities/data-utils.service';
import { MapsLoaderService } from './utilities/maps-loader.service';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';

@NgModule({
  declarations: [
    AppComponent,
    StateLandingComponent,
    GalleryViewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing
  ],
  providers: [
    DataUtilsService,
    MapsLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
