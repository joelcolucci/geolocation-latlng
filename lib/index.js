import { Coordinate } from 'geolocation-coordinate';
import { getDistanceBetween } from 'geolocation-distance-between';

class LatLng {
  constructor(latitude, longitude) {
    this.latitude = new Coordinate(latitude);
    this.longitude = new Coordinate(longitude);
  }

  getDistanceTo(latitude, longitude) {
    let thisCoordinate = {
      latitude: this.latitude.degrees,
      longitude: this.longitude.degrees
    };

    let targetCoordinate = {
      latitude: latitude,
      longitude: longitude
    };

    let distanceToInKM = getDistanceBetween(thisCoordinate, targetCoordinate);

    return distanceToInKM;
  }
}

export {
  LatLng
};
