const helloWorld = require("../JSfiles/helloWorld");

test("prints the string Hello World", () => {
  const string = "Hello World!";
  expect(helloWorld(string)).toEqual(string);
  expect(helloWorld(string)).toBe(string);
});
