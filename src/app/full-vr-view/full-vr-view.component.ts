import { Component, OnInit } from '@angular/core';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
import { MapsLoaderService } from '../utilities/maps-loader.service';
import { DataUtilsService } from '../utilities/data-utils.service';

declare const google: any;

@Component({
  selector: 'app-full-vr-view',
  templateUrl: './full-vr-view.component.html',
  styleUrls: ['./full-vr-view.component.css']
})
export class FullVrViewComponent implements OnInit {
  isMapLoaded: boolean;
  private map;
  private _url;

  constructor(
    public sanitizer:DomSanitizer,
    private dataUtilsService: DataUtilsService
  ) {
    // MapsLoaderService.load().then(
    //   res => {
    //     this.isMapLoaded = true;
    //     if (typeof google !== 'undefined') {
    //       this.initMap();
    //     }
    //   }
    // );
    this._url = this.sanitizer.bypassSecurityTrustResourceUrl(this.dataUtilsService.getData('panoUrl'));
  }

  ngOnInit() {
    
  }

  // Initialize Google Maps
  initMap() {
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('map'), { pano: 'reception', visible: true }
    );
    this._url = this.dataUtilsService.getData('panoUrl');
    let __this = this;
    panorama.registerPanoProvider(
      (pano) => {
        let ___this = __this;
        
        if (pano === 'reception') {
          return {
            location: {
              pano: 'reception',
              description: 'Google Sydney - Reception'
            },
            links: [],
            // The text for the copyright control.
            copyright: 'Imagery (c) 2010 Google',
            // The definition of the tiles for this panorama.
            tiles: {
              tileSize: new google.maps.Size(1024, 512),
              worldSize: new google.maps.Size(2048, 1024),
              // The heading in degrees at the origin of the panorama
              // tile set.
              centerHeading: 105,
              getTileUrl: (pano, zoom, tileX, tileY) => {
                return ___this._url + zoom + '-' + tileX + '-' + tileY + '.jpg';
              }
            }
          };
        }
      }
    );
  }

}
