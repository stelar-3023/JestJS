const monthDayYear = require("../JSfiles/dates");

describe("test for dates.js", () => {
  test("monthDayYear function exists", () => {
    expect(monthDayYear).toBeDefined();
  });
  // arrange
  today = monthDayYear();
  // act
  const wed = today.getUTCDate();
  test("returns the date of the current day", () => {
  // assert
    expect(wed).toBe(19);
  });
});
