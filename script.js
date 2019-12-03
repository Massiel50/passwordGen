// 4 arrays holding user choices for characters of password gen
var numPass = ["0","1","2","3","4","5","6","7","8","9"];
var specialPas = ["~", "`", "!", "#", "$", "%", "^", "&", "*", "+", "=", "-", "[", "]", "'", ";", "/", "{", "}", "|", ":", "<", ">", "?"];
var lowerCharPas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharPas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// array composed of what char user wants in password... AKA mysteryMeat
var mysteryMeat = [];
// array of randomized characters consisting of only length of password
var mysteryMeatFinal = [];

function generatePassword()
{
  // Welcome user and ask for name
  alert("Hi there! Let's make a nifty and secure password for you");
  var userName = prompt("To get started, what is your name?");

  // inform user password must be 8 char or more, prompt for number
  var passwordLength = prompt(userName + " your password can be between 8 and 128 characters. How long would you like your password to be?");
  var passwordLengthInt = parseInt(passwordLength);

  if ((passwordLength === "") || (passwordLength < 8) || (passwordLength > 128) || (isNaN(passwordLengthInt) === true)){
    passwordLengthInput();
  }

  // passwordLengthInput();

  function passwordLengthInput()
  {
   // inform user password must be 8 char or more, prompt for number
  var passwordLength = prompt(userName + " your password can be between 8 and 128 characters. How long would you like your password to be?");
  var passwordLengthInt = parseInt(passwordLength);
    
// if statements warning user about incorrect input
      if (passwordLength === "")
    {
      alert("Please enter something, like a number");
      passwordLength =0;
      passwordLengthInput();
    }
    if(passwordLength < 8)
    {
      alert("Your password must be at least 8 characters long");
      passwordLength =0;
      passwordLengthInput();
    }
    if(passwordLength > 128)
    {
      alert("Your password must be at most 128 characters long");
      passwordLength =0;
      passwordLengthInput();
    }
    if (isNaN(passwordLengthInt) === true)
    {
      alert("Please choose a number");
      passwordLength =0;
      passwordLengthInput();
    }
  }
 
     // ask user if want to use numbers and concat into mysteryMeat
     var wantNum = confirm("Would " + userName + " like to use numbers in the password?");
     if(wantNum == true)
     {
       mysteryMeat.push(numPass);
       alert("Ok " + userName + ", we'll add numbers");
     }
     else{
     alert("Ok " + userName + ", no numbers");
     }
  
   // ask user if want to use special characters and concat into mysteryMeat
     var wantSpecChar = confirm("Would " + userName + " like to use special characters in the password?");
     if(wantSpecChar == true)
     {
       mysteryMeat.push(specialPas);
       alert("Ok " + userName + ", we'll add special characters");
     }
     else{
   alert("Ok " + userName + ", no special characters")
     }
   // ask user if want to use lower case letters and concat into mysteryMeat
     var wantLowCase = confirm("Would " + userName + " like to use lower case characters in the password?");
     if(wantLowCase == true)
     {
       mysteryMeat.push(lowerCharPas);
       alert("Ok " + userName + ", we'll add lower case characters");
     }
     else{
     alert("Ok " + userName + ", no lower case characters")
     }
   // ask user if want to use upper case letters and concat into mysteryMeat
     var wantUpCase = confirm("Would " + userName + " like to use upper case characters in the password?");
     if(wantUpCase == true)
    {
     mysteryMeat.push(upperCharPas);
     alert("Ok " + userName + ", we'll add upper case characters")
    }
   else{
     alert("Ok " + userName + ", no upper case characters")
   }
 
  //  checks to see what arrays have been added
   for (var i=0; i<mysteryMeat.length; i++){
    console.log(mysteryMeat[i]);
   }
   
// uses flat method to seperate arrays into one big sole array
mysteryMeat = mysteryMeat.flat(1);
console.log(mysteryMeat);

   // randomly select index's in mysteryMeat array for password
  //  mysteryMeat[Math.floor(Math.random() * mysteryMeat.length)];
  //  console.log(mysteryMeat);
  //  alert("Your password is " + mysteryMeat);
  //    return mysteryMeat;

  //  randomize mysteryMeat
  // mysteryMeat.sort(function(a, b){return 0.5 - Math.random() });
  // console.log(mysteryMeat);


  // select length of password to return
  for (var i = 0; i < passwordLength; i++)
  {
    console.log(mysteryMeat[i]);
    mysteryMeatFinal.push(mysteryMeat[Math.floor(Math.random()* mysteryMeat.length)]);
    
  }
  return mysteryMeatFinal.join("");

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
// copy to clipboard function
function copyToClipboard(password) {
  // BONUS 
  /* Get the text field */
  var copyText = document.getElementById(password);

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the password: " + copyText.value);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
