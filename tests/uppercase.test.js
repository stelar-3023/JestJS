const upperCase = require("../JSfiles/upperCase");

describe("test string to see if it is uppercase", () => {
  test("upperCase function exists", () => {
    // arrange
    let x = "test";
    let y = "TEST";
    // assert
    expect(upperCase).toBeDefined();
  });
  test("upperCase 'test' to equal 'TEST'", () => {
    expect(upperCase("test")).toBe("TEST");
  });
});
