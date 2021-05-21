const validatePassword = require("../JSfiles/validate");

describe("validate password", () => {
  test("validatePassword function exists", () => {
    expect(validatePassword).toBeDefined();
  });
  test("return false if an empty string", () => {
    expect(validatePassword("")).toBe(false);
  });
  test("return true if password has 8 characters or more, a letter, and a number", () => {
    expect(validatePassword("1234567a")).toBe(true);
    expect(validatePassword("1234567A")).toBe(true);
    expect(validatePassword("1234567Aa")).toBe(true);
  });
  test("return false if password is 8 characters or more, but no letters", () => {
    expect(validatePassword("123745678")).toBe(false);
  });
  test("returns false if password is 8 characters or more, but has no numbers", () => {
    expect(validatePassword("abcdefgh")).toBe(false);
  });
  test("returns false if password is 8 uppercase characters or more, but has no numbers", () => {
    expect(validatePassword("ABCDEFGH")).toBe(false);
  });
  test("returns false if password is 8 uppercase characters or more, but has no numbers", () => {
    expect(validatePassword("ABCDEFGH")).toBe(false);
  });
  test("returns false if password is less than 8 characters, but has a number", () => {
    expect(validatePassword("al")).toBe(false);
  });
});
