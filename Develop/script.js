// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//I need a variable of all acceptable characters

const passKeys = {
  lowercase: 'abcedfghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '!@#$%^&*(){}[];'
};


//stores the confirms so they can be accesed in the writePassword function



// Assignment code here
var prompts = function () {
  var length = window.prompt("How many characters should your password have? (Between 8 - 128)");
  if (length >= 8 && length <= 128) {
    
    var lowerConfirm = window.confirm("Do you want your passwork to include lowercase letters?");
    var upperConfirm = window.confirm("Do you want your password to include uppercase letters?");
    var numConfirm = window.confirm("Do you want your password to include numbers?");
    var specialConfirm = window.confirm("Do you want your password to include special characters?");

    generatePassword(length, lowerConfirm, upperConfirm, numConfirm, specialConfirm);
    
    
    
  } else {
    window.alert("Sorry, please select a number between 8 and 128.");
    prompts();
  };

}
  

  
let generatePassword = function(length, lowerConfirm, upperConfirm, numConfirm, specialConfirm) {
  var passwordField = [];
  //alert for if none of the character types are selected
  if (lowerConfirm === false && upperConfirm === false && 
    numConfirm === false && specialConfirm === false) {
      window.alert("Please select at least one character type.");
      prompts();
  }

  if (lowerConfirm) {
    passwordField.push(passKeys.lowercase.split(""));
    console.log('lowercase');
  };
  
  if (upperConfirm) {
    passwordField.push(passKeys.uppercase.split(""));
    console.log('uppercase');
  };
  
  if (numConfirm) {
    passwordField.push(passKeys.number.split(""));
    console.log('number');
  };
  
  if (specialConfirm) {
    passwordField.push(passKeys.symbol.split(""));
    console.log('special');
  };
  
  let output = '';
 console.log(passwordField);
  let passwordField2 = passwordField.flat();
 

  for (let i = 0; i < length; i++) {
    output += passwordField2[Math.floor(Math.random() * passwordField2.length)];
                     
  }
  passwordField = [];
  passwordField2 = [];
  writePassword(output);
  
}
  
  







//I need the writePassword function to generate randomly

  








//var lowerRandom = passKeys.lowercase.split("")[Math.floor(Math.random() * passKeys.lowercase.length)]);
// Write password to the #password input
function writePassword(output) {
  var password = output;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", prompts);
