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
  constructor(coordinateDecimal, coordinateType) {
    this.coordinateDecimal = coordinateDecimal;

    this.degrees = Math.floor(this.coordinateDecimal);
    this.minutes = ((this.coordinateDecimal - this.degrees) * 60);
    this.seconds = ((this.minutes - Math.floor(this.minutes)) * 60);

    this.cardinalDirection = this._getCardinalDirection(this.coordinateDecimal, coordinateType);
  }

  _getCardinalDirection(coordinateDecimal, coordinateType) {
    let isPositive = coordinateDecimal > 0 ? true : false;

    let cardinalDirection;
    if (coordinateType === 'latitude') {
      if (isPositive) {
        cardinalDirection = 'North';
      } else {
        cardinalDirection = 'South';
      }
    } else {
      if (isPositive) {
        cardinalDirection = 'East';
      } else {
        cardinalDirection = 'West';
      }
    }

    return cardinalDirection;
  }

  toString() {
    return `${this.coordinateDecimal.toFixed(3)}\u00B0 ${this.cardinalDirection}`;
  }
}

export {
  LatLng,
  Coordinate
};
