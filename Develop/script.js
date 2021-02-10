//I need arrays of all acceptable special characters
//I need an alert for if none of the character types are selected
//I need a function that stores the confirms and sends them to writePassword function
//I need the writePassword function to generate randomly

// Assignment code here
var prompts = function (generateBtn) {
  var length = window.prompt("How many characters should your password have? (Between 8 - 128)");
  if (length >= 8 && length <= 128) {
    //I need to somehow store this value to use in the writePassword function
  } else {
    window.alert("Sorry, please select a number between 8 and 128.");
    prompts();
  };
  
  var lowerConfirm = window.confirm("Do you want your passwork to include lowercase letters?");
  if (lowerConfirm) {
    //use lowercase letters in writePassword function
  };
  
  var upperConfirm = window.confirm("Do you want your password to include uppercase letters?");
  if (upperConfirm) {
    //use uppercase letters in writePassword function
  };
  
  var numConfirm = window.confirm("Do you want your password to include numbers?");
  if (numConfirm) {
    //use numbers in writePassword function
  };
  
  var specialConfirm = window.confirm("Do you want your password to include special characters?");
  if (specialConfirm) {
    //use special characters in writePassword function
  };

  //writePassword();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", prompts);
