import { Coordinate } from 'geolocation-coordinate';

class LatLng {
  constructor(latitude, longitude) {
    this.latitude = new Coordinate(latitude);
    this.longitude = new Coordinate(longitude);
  }

  toString() {

  }

  toJSON() {

  }
}

export {
  LatLng
};
