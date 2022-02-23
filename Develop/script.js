// Assignment Code
var generateBtn = document.querySelector("#generate");

//arrays for the variables to be used for the random password; we want to be able to use numeric, special characters, lowercase and uppercase letters.
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "(", ")", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~", "{", "}", "[", "]"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//we need to confirm how many characters the user would like in their password we need between 12 and 128
function generatePassword() {
  var confirmLength = window.prompt("How many characters would you like your password to contain?  Must be between 12 and 128 characters.");
  confirmLength = parseInt(confirmLength);

  //loop this is the answer is not within the given parameters, you can use a loop or if statements.
  while (confirmLength <=11 || confirmLength >= 129) {
    window.alert("Password length must be between 12 and 128 characters. Please try again");
    //repeat prompt to confirm length
    var confirmLength = window.prompt("How many characters would you like your password to contain?  Must be between 12 and 128 characters.");
  }
  //letting our user know how many characters long this will be 
    window.alert("Your password will be " + confirmLength + " characters long.");

    //now we want the user to set the parameters of the password, remember the user must select at least one
    var confirmNumericCharacter = window.confirm("Click OK if you would like to include numeric characters.");
    var confirmSpecialCharacter = window.confirm("Click OK if you would like to include special characters.");
    var confirmLowerCase = window.confirm("Click OK if you would like to include lowercase letters.");
    var confirmUpperCase = window.confirm("Click OK if you would like to include uppercase letters.");
      // we create another loop so that the user must pick one, create the loop and repeat
      while (confirmNumericCharacter === false && confirmSpecialCharacter === false && confirmLowerCase === false && confirmUpperCase === false) {
        window.alert("You must choose at least one character.");
        var confirmNumericCharacter = window.confirm("Click OK if you would like to include numeric characters.");
        var confirmSpecialCharacter = window.confirm("Click OK if you would like to include special characters.");
        var confirmLowerCase = window.confirm("Click OK if you would like to include lowercase letters.");
        var confirmUpperCase = window.confirm("Click OK if you would like to include uppercase letters.");
      }

      
      //set if statements for when the user wants to use numbers, special characters, lowercase or uppercase letters  

   

    for (var i = 0; i < confirmLength; i++) {

      var numericCharacters = ""
      var specialCharacters = ""
      var lowerCharacters = ""
      var upperCharacters = ""

      if (confirmNumericCharacter) {
        // this will select a random element inside of the number variable
        numericCharacters = number[Math.floor(Math.random() * number.length)];
      }

      if (confirmSpecialCharacter) {
        specialCharacters = specialChar[Math.floor(Math.random() * specialChar.length)];
      }

      if (confirmLowerCase) {
        lowerCharacters = lower[Math.floor(Math.random() * lower.length)];
      }

      if (confirmUpperCase) {
        upperCharacters = upper[Math.floor(Math.random() * upper.length)];
      }
    
      var passwordCharacters = numericCharacters + specialCharacters + lowerCharacters + upperCharacters
      var yourPassword = ""
    
      yourPassword = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(yourPassword)
       
    }
      return yourPassword;
    
  
}




      
      // i equals 0 at the beginning of the for loop, i < array.length as long as i is less than array length and we continue looping
      //after each loop we increment by 1
      



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
