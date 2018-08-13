import { Coordinate } from '../lib/index';

describe('Coordinate properties', () => {
  let coord;

  beforeEach(() => {
    coord = new Coordinate(59.2349887712, 'latitude');
  });

  test('degrees', () => {
    let degrees = coord.degrees;

    expect(degrees).toEqual(59);
  });

  test('minutes', () => {
    let minutes = coord.minutes;

    expect(minutes).toEqual(14.09932627200007);
  });

  test('seconds', () => {
    let seconds = coord.seconds;

    expect(seconds).toEqual(5.959576320004203);
  });

  test('cardinalDirection', () => {
    let cardinalDirection = coord.cardinalDirection;

    expect(cardinalDirection).toEqual('North');
  });
});


describe('Coordinate toString instance method', () => {
  let coord;

  beforeEach(() => {
    coord = new Coordinate(59.2349887712, 'latitude');
  });

  test('toString - default - dd', () => {
    let coordString = coord.toString();

    expect(coordString).toEqual('59.235° North');
  });

  test('toString - decimal degrees - dd', () => {
    expect(true).toEqual(false);
  });

  test('toString - degrees, decimal minutes - ddm', () => {
    expect(true).toEqual(false);
  });

  test('toString - degrees, minutes, seconds - dms', () => {
    expect(true).toEqual(false);
  });
});

// toJson()
