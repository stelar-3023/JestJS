const reverseString = require("../JSfiles/reverseString");

describe("reverse a string", () => {
  test("reverse function extists", () => {
    expect(reverseString).toBeDefined();
  });
  // arrange
  let str1 = "hello";
  let str2 = "olleh";
  let str3 = "Hello";
  // act

  // assert
  test("String reverses", () => {
    expect(reverseString(str1)).toEqual(str2);
  });
  test("String reverses with uppercase", () => {
    expect(reverseString(str3)).toEqual(str2);
  });
});
