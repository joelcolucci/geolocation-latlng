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

class Coordinate {
  constructor(decimalCoordinate) {
    this.decimalCoordinate = decimalCoordinate;

    this.degrees = Math.floor(this.decimalCoordinate);
    this.minutes = ((this.decimalCoordinate - this.degrees) * 60);
    this.seconds = ((this.minutes - Math.floor(this.minutes)) * 60);
  }
}

export {
  LatLng,
  Coordinate
};
