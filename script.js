// 4 arrays holding user choices for characters of password gen
var numPass = ["0","1","2","3","4","5","6","7","8","9"];
var specialPas = ["~", "`", "!", "#", "$", "%", "^", "&", "*", "+", "=", "-", "[", "]", "'", ";", "/", "{", "}", "|", ":", "<", ">", "?"];
var lowerCharPas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharPas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// array composed of what char user wants in password... AKA mysteryMeat
var mysteryMeat = [];

function generatePassword()
{
  // Welcome user and ask for name
  alert("Hi there! Let's make a nifty and secure password for you");
  var userName = prompt("To get started, what is your name?");
  // ask user if want to use numbers and push into mysteryMeat

  // ask user if want to use special characters and push into mysteryMeat

  // ask user if want to use lower case letters and push into mysteryMeat

  // ask user if want to use upper case letters and push into mysteryMeat

}



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
