const arraySort = require("../JSfiles/arraySort");

describe("sort array", () => {
  test("sort an array in ascending order", () => {
    // arrange
    let unsorted_array = [10, 7, 2, 3];
    // act
    let sorted_array = arraySort(unsorted_array);
    // assert
    expect(sorted_array);
  });
});
