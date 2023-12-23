// Assignment Code
// code below is for clicking button down to the next message
var generateBtn = document.querySelector("#generate");


// Write password to the #password input (DON'T TOUCH THIS)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



//ALL LOGIC GOES DOWN HERE NOT ABOVE
//prompt(), alert(), confirm()

// List of variables
var length = prompt("How long do you want your password to be?")
var required = alert("You must choose at least one of the four following options.")
var lowercase = confirm("Do you want to include lowercase letters?")
var uppercase = confirm("Do you want to include uppercase letters?")
var numbers = confirm("Do you want to include numbers?")
var spec = confirm("Do you want to include special characters?")


function generatePassword() {
  // User must give valid length of password and must be a number
  while () {
    get_length();
  }
  // User must answer at least one question to the positive
  while () {
    four_opts();
  }
  // Create the array of selected characters
  // By now we should have the final array of characters to choose from for the final password.
  // Get the number of elements in the array
  // Use random number generator to select items in array.
  for (var i = 0; i < ; i++) {
  }
  return final_pw;
}  // End of generate_password function


var randomNumber = Math.floor(Math.random() * max);
//math.floor rounds down and makes it an integer
//math.seal rounds down and makes it an integer
// Random number generator
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// Create the list of characters that will be used in the password, as selected by user
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var NumbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var SpecialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];  

var randomNumber = Math.floor(Math.random() * Array.length - 1);

// Write password to the #password input

// Ask the questions
function get_length() {
  pw_length = prompt();
}
function four_opts() {
  use_lc = confirm("");
  use_uc = confirm("");
}

// Arrays
var final_array = [];
var final_pw = [];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// code above is for clicking button

// clear when click Generate Password so it won't add on to the previous password