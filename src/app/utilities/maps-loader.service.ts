import { Injectable } from '@angular/core';

const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB6GX7xf4vbJatdMIDQ5v3ISfV4S62FWcs&libraries=places&callback=initMap';

@Injectable()
export class MapsLoaderService {
  private static promise;

  public static load() {
    // First time 'load' is called?
    if (!MapsLoaderService.promise) {
      // Make promise to load
      MapsLoaderService.promise = new Promise(resolve => {
        // Set callback for when google maps is loaded.
        window['initMap'] = (ev) => {
          resolve('google maps api loaded');
        };
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
      });
    }
    // Always return promise. When 'load' is called many times, the promise is already resolved.
    return MapsLoaderService.promise;
  }

}
