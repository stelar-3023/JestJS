const divide = require("../JSfiles/divide");

describe("divide function", () => {
  test("divides 4 / 2 to equal 2", () => {
    // arrange
    let x = 4;
    let y = 2;
    let result = 2;
    let typeofResult = "number";
    // act
    let division = divide(x, y);
    // assert
    expect(division).toBe(result);
    expect(typeof division).toBe(typeofResult);
  });
});
