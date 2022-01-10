const PASSWORD_MIN = 8;
const PASSWORD_MAX = 128;
const CHARACTER_POOL = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

/**
 * Asks user for how long they want their password to be.
 * @returns Length inclusively between PASSWORD_MIN and PASSWORD_MAX.
*/
function getPasswordLength() {
  let passwordLength = 0;
  while (passwordLength < PASSWORD_MIN || passwordLength > PASSWORD_MAX) {
    passwordLength = prompt(
      `How long do you want your password? Must be between ${PASSWORD_MIN} and ${PASSWORD_MAX}`,
      "16"
    );
    if (passwordLength < PASSWORD_MIN) {
      alert(`Your password must be no less than ${PASSWORD_MIN} in length`);
    } else if (passwordLength > PASSWORD_MAX) {
      alert(`Your password must be no more than ${PASSWORD_MAX} in length`);
    }
  }
  return passwordLength;
}

function generatePassword() {
  let password;
  let passwordLength;
  let requestedCharacters = "";

  // prompt for password length. Length must be between 8-128 characters inclusive.
  passwordLength = getPasswordLength();

  console.log(passwordLength);

  // ask if wanting to use lowercase, uppercase, numeric, and/or special characters.
  // If none are selected, handle exception, notify they must select at least one.

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
