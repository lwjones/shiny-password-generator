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
 * @returns {int} Length inclusively between PASSWORD_MIN and PASSWORD_MAX.
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

/**
 * Asks user which sets of characters they would like to use for their password.
 * If none are selected, the user will be prompted again.
 * @returns {string} String of characters.
*/
function getNeededCharacters() {
  let characters = "";
  let lowercase = confirm("Would you like to use lowercase letters in your password?");
  let uppercase = confirm("Would you like to use uppercase letters in your password?");
  let numbers = confirm("Would you like to use numbers in your password?");
  let special = confirm("Would you like to use special characters in your password?");

  if (!(lowercase || uppercase || numbers || special)) {
    alert("Unable to generate password. No characters specified.");
    return getNeededCharacters();
  }

  if (lowercase) {
    characters += CHARACTER_POOL.lower;
  }
  if (uppercase) {
    characters += CHARACTER_POOL.upper;
  }
  if (numbers) {
    characters += CHARACTER_POOL.numbers;
  }
  if (numbers) {
    characters += CHARACTER_POOL.special;
  }

  return characters;
}

/**
 * Creates a password. The user specifies the length of the password and which
 * characters to use.
 * @returns {string} Unique password.
 */
function generatePassword() {
  let password = "";
  let passwordLength;
  let requestedCharacters = "";

  passwordLength = getPasswordLength();
  requestedCharacters = getNeededCharacters();

  for (let i = 0; i < passwordLength; i++) {
    password += requestedCharacters[Math.floor(Math.random() * requestedCharacters.length)];
  }

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
