// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Choose a password length between 8 & 128 characters");
  console.log(passwordLength)
  if (passwordLength < 8) {
    alert("Please choose a value between 8 & 128")
    return
  }
  if (passwordLength > 128) {
    alert("Please choose a value between 8 & 128")
    return
  }
  var lowercase = confirm("Do you want to include lowercase letters?")
  var uppercase = confirm("Do you want to include uppercase letters?")
  var numeric = confirm("Do you want to include numbers?")
  var special = confirm("Do you want to include special characters?")

  var characterBase = ''
  var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numbers = '0123456789'
  var specialCharacters= '!@#$%^&*()_+'

  if (lowercase == true) {
    characterBase = characterBase + lowercaseLetters
  }
  



  return "Password Gen"

}