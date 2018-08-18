# geolocation-latlng
> ES6 class to work with Geolocation API latitude and longitude

## Installation
```
# NPM
npm install geolocation-latlng --save

# Yarn
yarn add geolocation-latlng
```

## Getting Started
```javascript
import { LatLng } from 'geolocation-latlng';

// Create an instance
let latLng = new LatLng(latitude, longitude);

// Pretty string methods available**
latlng.latitude.toString();
latLng.longitude.toString();

// Get distance to another coordinate
latLng.getDistanceTo(lat, lng);
```
** Latitude and longitude are instance of the [Coordinate class](https://www.npmjs.com/package/geolocation-coordinate).
Many formatting and utility methods are available on latitude and longitude.

## Credits
The LatLng API was inspired by the Google Maps API as well as MapBox's API.

## License
MIT License Copyright (c) 2018 Joel Colucci
