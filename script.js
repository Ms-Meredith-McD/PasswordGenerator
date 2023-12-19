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

//ALL LOGIC GOES DOWN HERE NOT ABOVE
//prompt(), alert(), confirm()

var length = prompt("How long do you want your password to be?")
var lowercase = confirm("Do you want to include lowercase letters?")

//look up "Java Script Random Number Generator"

var randomNumber = Math.floor(Math.random() *max);
//math.floor rounds down and makes it an integer
//math.seal rounds down and makes it an integer

var alllowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

var randomNumber = Math.floor(Math.random() *Array.length - 1);