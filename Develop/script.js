// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//I need an object variable of all acceptable characters

const passKeys = {
  lowercase: 'abcedfghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '!@#$%^&*(){}[];'
};

// when the generate password button is clicked:
var prompts = function () {
  var length = window.prompt("How many characters should your password have? (Between 8 - 128)");
  if (length >= 8 && length <= 128) {
    //stores the confirms so they can be accesed in the generatePassword function
    var lowerConfirm = window.confirm("Do you want your passwork to include lowercase letters?");
    var upperConfirm = window.confirm("Do you want your password to include uppercase letters?");
    var numConfirm = window.confirm("Do you want your password to include numbers?");
    var specialConfirm = window.confirm("Do you want your password to include special characters?");
    
    //call generatePassword(); with each variable as parameters
    generatePassword(length, lowerConfirm, upperConfirm, numConfirm, specialConfirm);
    
  } else {
    window.alert("Sorry, please select a number between 8 and 128.");
    prompts(); //restarts prompt() function
  };

}

//generatePassword function using the same variable parameters from prompts() function
let generatePassword = function(length, lowerConfirm, upperConfirm, numConfirm, specialConfirm) {
  //use an empty container to store the character types that are confirmed
  var passwordField = [];
  //alert for if none of the character types are selected
  if (lowerConfirm === false && upperConfirm === false && 
    numConfirm === false && specialConfirm === false) {
      window.alert("Please select at least one character type.");
      prompts();
  };

  //if user wants lowercase, split the lowercase values from the passKeys object variable, 
  //and push that split array into our new passwordField array
  if (lowerConfirm) {
    passwordField.push(passKeys.lowercase.split(""));
  };
  
  if (upperConfirm) {
    passwordField.push(passKeys.uppercase.split(""));
  };
  
  if (numConfirm) {
    passwordField.push(passKeys.number.split(""));
  };
  
  if (specialConfirm) {
    passwordField.push(passKeys.symbol.split(""));
  };
  
  let output = '';
  
  //flatten all the input we sent to passwordField and assigned it as a new array to a new variable
  let passwordField2 = passwordField.flat();
 
  //randomizes the characters from passwordField2 variable & store into the output variable
  for (let i = 0; i < length; i++) {
    output += passwordField2[Math.floor(Math.random() * passwordField2.length)];
                     
  }
  //empties the arrays after each time the generate password btn is clicked
  passwordField = [];
  passwordField2 = [];

  //use output as the parameter and call the writePassword function
  writePassword(output);
  
}


// Write password to the #password input
//use output as the parameter in the function, and set password equal to the value of output
function writePassword(output) {
  var password = output;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", prompts);
