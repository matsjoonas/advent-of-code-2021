import mapGrid from "../mapGrid";

describe('mapGrid', () => {

  test('mapGrid applies the mapping function', () => {
    const grid = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ];

    const expectedResult = [
      [2, 3, 4],
      [2, 3, 4],
      [2, 3, 4],
    ];

    const mappingFunction = function mappingFunction(item: number) {
      return item + 1;
    }

    expect(mapGrid(grid, mappingFunction)).toEqual(expectedResult);
  });
});
