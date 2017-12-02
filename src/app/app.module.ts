import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { StateLandingComponent } from './state-landing/state-landing.component';

import { DataUtilsService } from './utilities/data-utils.service';
import { MapsLoaderService } from './utilities/maps-loader.service';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';
import { CityFillerComponent } from './city-filler/city-filler.component';
import { TemplateXComponent } from './template-x/template-x.component';
import { TourGuideListingComponent } from './tour-guide-listing/tour-guide-listing.component';
import { FullVrViewComponent } from './full-vr-view/full-vr-view.component';

@NgModule({
  declarations: [
    AppComponent,
    StateLandingComponent,
    GalleryViewComponent,
    CityFillerComponent,
    TemplateXComponent,
    TourGuideListingComponent,
    FullVrViewComponent
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
