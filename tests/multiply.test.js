const multiply = require("../JSfiles/multiply");

test("multiplies 3 * 2 to equal 6", () => {
  expect(multiply(3, 2)).toBe(6);
});
