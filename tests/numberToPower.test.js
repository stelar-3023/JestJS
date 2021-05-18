const numberToPower = require("../JSfiles/numberToPower");

describe("is number to power function", () => {
  test("numberToPower function exists", () => {
    expect(numberToPower).toBeDefined();
  });
  // arrange
  let num1 = 4;
  let num2 = 2;
  let result = num1 ** num2;
  // act
  let power = numberToPower(num1, num2);
  // assert
  expect(power).toBe(result);
});
