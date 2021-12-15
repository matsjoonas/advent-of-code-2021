import getAdjacentCoords from "../getAdjacentCoords";

describe('getAdjacentCoords', () => {

  test('getAdjacentCoords returns right coordinates', () => {

    const expectedResult = [
      [2, 2],
      [3, 3],
      [2, 4],
      [1, 3],
      [3, 2],
      [3, 4],
      [1, 4],
      [1, 2],
    ]

    expect(getAdjacentCoords(2, 3)).toEqual(expectedResult);
  });
});
