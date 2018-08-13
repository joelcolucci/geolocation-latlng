import { Coordinate } from '../lib/index';

describe('Coordinate class', () => {
  let coord;

  beforeEach(() => {
    coord = new Coordinate(59.2349887712);
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
});


// getEastWestNorthSouth
// toString()
// toJson()
