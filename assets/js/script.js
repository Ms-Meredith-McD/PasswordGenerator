// Assignment Code
// code below is for clicking button down to the next message
var generateBtn = document.querySelector("#generate");

// Write password to the #password input (DON'T TOUCH THIS)
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// code above is for clicking button

function generatePassword() {
  // Create the list of characters that will be used in the password
  var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var userChoice = "";

  // Asks the user to pick a password length and then converts it to a number
  var length = prompt("How long do you want your password to be? Please choose 8 to 128 characters.");
  var passLength = parseInt(length);

  //Asks the user what type of characters they want to use
  var required = alert("You must choose at least one of the four following options.");
  var lowercase = confirm("Do you want to include lowercase letters?");
  var uppercase = confirm("Do you want to include uppercase letters?");
  var numbers = confirm("Do you want to include numbers?");
  var spec = confirm("Do you want to include special characters?");

  // check to make sure at least one character type was chosen, otherwise altert to choose one type and go back to start
  if (lowercase === false && uppercase === false && numbers === false && spec === false) {
    alert("Please choose at least one character type");
    return generatePassword();
  }

  //Build the password strings with all the choices made
  if (lowercase) {
    userChoice += lowerCaseArray
  }
  if (uppercase) {
    userChoice += upperCaseArray
  }
  if (numbers) {
    userChoice += numbersArray
  }
  if (spec) {
    userChoice += specialArray
  }

// random number generation to build the rest of the password
var passwordCompletion = ''
for (var i = 0; i < passLength; i++) {
  var randomNumber = Math.floor(Math.random() * userChoice.length);
  passwordCompletion += userChoice[randomNumber];
}
return passwordCompletion
}   