function validatePassword(password) {
  const validLength = password.length >= 8;
  const containsLetter = /[a-zA-Z]/g.test(password);
  const containsNumber = /[0-9]/g.test(password);
  // if (password.length >= 8 && /[a-z]/g.test(password)) {
  //   return true;
  // }
  // return false;
  return validLength && containsLetter && containsNumber;
}
module.exports = validatePassword;
