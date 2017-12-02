import { Component, OnInit } from '@angular/core';
import { DataUtilsService } from './../utilities/data-utils.service';
import { MapsLoaderService } from './../utilities/maps-loader.service';

declare const google: any;

@Component({
  selector: 'app-state-landing',
  templateUrl: './state-landing.component.html',
  styleUrls: ['./state-landing.component.css']
})

export class StateLandingComponent implements OnInit {

  private map;
  private placesInListing;
  private isMapLoaded = false;

  // Initialize Google Maps
  initMap() {
    let centerCoordinates = { lat: 28.7041, lng: 77.1025 };
    let mapProp = {
      center: new google.maps.LatLng(centerCoordinates),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,

      panControl: true,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      },
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        position: google.maps.ControlPosition.BOTTOM_LEFT
      },
      scaleControl: true,
      scaleControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      },
      streetViewControl: true,
      overviewMapControl: true
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapProp);

    // get current location
    let infoWindow = new google.maps.InfoWindow;

    // Get user's location
    this.getLocation(infoWindow);
  }

  getLocation(infoWindow) {
    if (navigator.geolocation) {
      let that = this;
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          // infoWindow.setPosition(currentPosition);
          // infoWindow.setContent(textMessages.location_found.message);
          // infoWindow.open(map);
          that.map.setCenter(currentPosition);
          that.addMarkerAt(that.map, currentPosition, {
            'message': that.dataUtilsService['textMessages'].location_found.message,
            'event': 'mouseover'
          }, 'assets/images/icons/current-location-marker.svg');
          that.searchHotspots(that.map, currentPosition);
        },
        () => {
          console.log(that.dataUtilsService['errors'].geolocation_failure.message);
        }
      );
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infoWindow, this.map.getCenter());
    }
  }

  // Ask user for the location
  handleLocationError(flag, infoWindow, mapCenter) { }

  // Get user geolocation
  geocodeLatLng() { }

  // Show popup about the detected location and number of nearby popular joints found
  addMarkerAt(map, coordinates, details = {}, icon) {
    let newMarker = new google.maps.Marker({
      position: coordinates,
      animation: google.maps.Animation.DROP,
      icon: icon,
      map: map
    });
    if (!this.dataUtilsService.isEmpty(details)) {
      newMarker['infoWindow'] = new google.maps.InfoWindow({
        content: details['message']
      });
      google.maps.event.addListener(newMarker, details['event'], () => {
        this['infoWindow'].open(map, this);
      });
    }
  }

  searchHotspots(map, centerCoordinates) {
    let placeService = new google.maps.places.PlacesService(map);
    let request = {
      location: centerCoordinates,
      radius: '500',
      type: ['restaurant']
    };
    placeService.nearbySearch(request, (results, status) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          if (results[i].rating >= 4) {
            let place = results[i];
            let coordinates = {
              lat: results[i].geometry.location.lat(),
              lng: results[i].geometry.location.lng()
            };
            let details = {
              'message': 'Name: ' + results[i].name + '<br/> Rating: ' + results[i].rating,
              'event': 'click'
            };
            this.addMarkerAt(this.map, coordinates, details, undefined);
          }
        }
      }
    });
  }

  // slide in the right navbar and pop out markers on popular 5star joints
  // On click of any of these markers, fetch details and load into the popup

  // load map with apiKey from data.js
  constructor(
    private dataUtilsService: DataUtilsService
  ) {
    MapsLoaderService.load().then(
      res => {
        this.isMapLoaded = true;
        if (typeof google !== 'undefined') {
          this.initMap();
        }
      }
    );
  }

  ngOnInit() {
  }

}
