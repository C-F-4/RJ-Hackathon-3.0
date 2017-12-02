import { Injectable } from '@angular/core';

@Injectable()
export class DataUtilsService {

  private apiKey = 'AIzaSyB6GX7xf4vbJatdMIDQ5v3ISfV4S62FWcs';

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

  isEmpty(data) {
    return (data === undefined || data === null || data === '') ? true : false;
  }

}
