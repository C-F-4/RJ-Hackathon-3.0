import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  private searchKey = '';

  // load map with apiKey from data.js
  constructor(
    public router: Router,
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

  // Initialize Google Maps
  initMap() {
    // Defaults are center of the Country Capital
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
      overviewMapControl: true,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#523735"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#c9b2a6"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#dcd2be"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ae9e90"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#93817c"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#a5b076"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#447530"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#fdfcf8"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f8c967"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#e9bc62"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e98d58"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#db8555"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#806b63"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8f7d77"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#b9d3c2"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#92998d"
            }
          ]
        }
      ]
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
          }, 'assets/images/icons/current-location-marker.svg',
          that);
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
  addMarkerAt(map, coordinates, details = {}, icon, that) {
    let newMarker = new google.maps.Marker({
      position: coordinates,
      animation: google.maps.Animation.DROP,
      icon: icon,
      map: map,
      optimized: false
    });
    if (!that.dataUtilsService.isEmpty(details)) {
      newMarker['infoWindow'] = new google.maps.InfoWindow({
        content: details['message']
      });
      google.maps.event.addListener(newMarker, details['event'], () => {
        that['infoWindow'].open(map, that);
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
    let __this = this;
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
            this.addMarkerAt(this.map, coordinates, details, undefined, __this);
          }
        }
      }
    });
  }

  // slide in the right navbar and pop out markers on popular 5star joints
  // On click of any of these markers, fetch details and load into the popup

  updateSuggestions(event: any) {
  }

}
