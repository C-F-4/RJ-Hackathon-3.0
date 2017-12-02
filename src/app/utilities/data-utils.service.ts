import { Injectable } from '@angular/core';

@Injectable()
export class DataUtilsService {

  private apiKey = 'AIzaSyB6GX7xf4vbJatdMIDQ5v3ISfV4S62FWcs';

  public panoUrl = 'https://www.google.com/maps/embed?pb=!1m0!4v1512253696483!6m8!1m7!1sCAoSLEFGMVFpcE42SWpjN0JUMEZQMlY4cnRmSWx6UVJwMDdCSGdaQmY3S3hKazVH!2m2!1d26.9865089!2d75.85056420000001!3f82.12274278950088!4f0!5f0.7820865974627469';

  private errors = {
    geolocation_failure: {
      message: "The Geolocation service failed."
    },
    unsupported_browser: {
      message: "Your browser doesn\'t support geolocation."
    },
    disabled_javascript: {
      message: "This site requires Javascript. Enable javascript in your browser to continue using the application."
    },
    general_error: {
      message: "Some error occured. Try reloading the window."
    }
  };

  private textMessages = {
    location_found: {
      message: "You're here."
    }
  };

  constructor() { }

  getData(dataName) {
    return this[dataName];
  }

  setData(dataName, dataValue) {
    self[dataName] = dataValue;
  }

  isEmpty(data) {
    return (data === undefined || data === null || data === '') ? true : false;
  } 
}
