// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate password based on the user choice
function generatePassword() {

    let specialChar = "!\"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~";
    let numChar = "1234567890";
    let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charList = "";
    let basePassword = "";
    let typeCount = 0;

    var passLength = prompt("Choose your password length (min = 8, max = 128): ");
    var passLength = parseInt(passLength);

    // To test if user don't enter number
    if (isNaN(passLength))  
    {
        alert("Only accept the number. Restart and try again!");
    }
    else {

        // password length min and max
        while(passLength < 8 || passLength >128) {
            passLength = prompt("Invalid number (min = 8 , max = 128). Choose your password length again: ");
        }
    }

    // Ask the user for character types and make sure one type of character is picked.
    while (typeCount == 0) {
        var upperCaseChoice = confirm("Include Uppercase Characters (ABCDEFGH)");

        var lowerCaseChoice = confirm("Include Lowercase Characters (abcdefgh)");

        var numsChoice = confirm("Include Numbers (123456)");

        var specialChoice = confirm("Include Symbols (@#$%)");
        
        // Including upperCase character
        if (upperCaseChoice) {
            typeCount++;                                         //Keep track of how many type of char user choose.
            basePassword += randomChar(1,upperCaseChar);         //randomly take 1 char from the list and add to the basePassword
            charList += upperCaseChar;                           //Added the upperCaseChar to the CharList
        }
        
        // Including lowerCase character
        if (lowerCaseChoice) {
            typeCount++;
            basePassword += randomChar(1,lowerCaseChar);
            charList += lowerCaseChar;
        }
        
        // Including number character
        if (numsChoice) {
            typeCount++;
            basePassword += randomChar(1,numChar);
            charList += numChar;
        }
        
        // Including special character
        if (specialChoice) {
            typeCount++;
            basePassword += randomChar(1,specialChar);
            charList += specialChar;
        }
        
        // Check and remind the user to choose at least 1 type of character. Reset all the question.
        if (typeCount == 0) {
            alert("MUST choose at least 1 type of character.")
        }
    }

    // Call randomChar function and add the remaining random char from the characterList to the basePassword.
    basePassword += randomChar((passLength - typeCount), charList);
    return basePassword;
}

/* 
----function to generate random password without special character----
*/
function randomChar(len, characterList) {
    var pass = "";
    for (var i = 0; i <len ; i++){
        pass += characterList.charAt(Math.floor(Math.random() * characterList.length));
    }
    return pass;
}




