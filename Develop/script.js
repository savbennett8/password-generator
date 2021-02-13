//I need a variable of all acceptable characters
const passKeys = {
  lowercase: 'abcedfghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '!@#$%^&*(){}[];'
};

//stores the confirms so they can be accesed in the writePassword function
let promptInput = [];

// Assignment code here
var prompts = function (generateBtn) {
  //generateBtn.preventDefault();
  
  var length = window.prompt("How many characters should your password have? (Between 8 - 128)");
  if (length >= 8 && length <= 128) {
    //push the user's input into the promptInput array
    promptInput.push(length);
    console.log(promptInput);
  } else {
    window.alert("Sorry, please select a number between 8 and 128.");
    prompts();
  };

  var lowerConfirm = window.confirm("Do you want your passwork to include lowercase letters?");
  if (lowerConfirm) {
    promptInput.push(lowerConfirm);
    console.log(promptInput);
  };
  
  var upperConfirm = window.confirm("Do you want your password to include uppercase letters?");
  if (upperConfirm) {
    promptInput.push(upperConfirm);
    console.log(promptInput);
  };
  
  var numConfirm = window.confirm("Do you want your password to include numbers?");
  if (numConfirm) {
    promptInput.push(numConfirm);
    console.log(promptInput);
  };
  
  var specialConfirm = window.confirm("Do you want your password to include special characters?");
  if (specialConfirm) {
    promptInput.push(specialConfirm);
    console.log(promptInput);
  };

  //alert for if none of the character types are selected
  if (lowerConfirm === false && upperConfirm === false && 
    numConfirm === false && specialConfirm === false) {
      window.alert("Please select at least one character type.");
      prompts();
  }

  //writePassword();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//I need the writePassword function to generate randomly
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", prompts);
