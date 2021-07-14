// Write password to the #password input
//criteria code
var uppercase = "abcdeABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

//associate with HTML critera 
var passwordTxt = document.getElementById("password");
var length = document.getElementById("length");
var incUppercase = document.getElementById("uppercase");
var incLowercase = document.getElementById("lowercase");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", () => {
  let characters = '';
  incUppercase.checked ? (characters += uppercase) : "";
  incLowercase.checked ? (characters += lowercase) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});

var generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

