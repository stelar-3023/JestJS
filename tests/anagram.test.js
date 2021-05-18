const isAnagram = require("../JSfiles/anagram");

describe("isAnagram function", () => {
  test("isAnagram function exists", () => {
    expect(typeof isAnagram).toEqual("function");
  });
  // arrange
  let str1 = "cinema";
  let str2 = "iceman";
  test('"cinema is an anagram of iceman"', () => {
    // assert
    expect(isAnagram(str1, str2)).toBeTruthy();
  })
});
