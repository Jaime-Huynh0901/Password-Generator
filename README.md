# JavaScript: Password Generator

The goal was to create an application that generates a random password based on user-selected criteria. This app runs in the browser and features dynamically updated HTML and CSS powered by the JavaScript code. This also involved ensuring the app features a clean and polished UI, with a responsive layout, ensuring it adapts to multiple screen sizes. Employees with access to sensitive data will often need to be able to randomly generate a password that meets certain criteria so that they can create a strong password that provides greater security. 

Use Password Generator here: https://jaime-huynh0901.github.io/Password-Generator/index.html

## Installation
```bash
i. Fork the Github repository.
ii. Clone the forked repo into your local machine using gitbash/terminal to pull the project and data.
iii. Access the index.html, style.css and script.js files and assets via Visual Studio or in your browser to view the code and website respectively.  
iv. Use the Password Generator
```

## Usage
JavaScript Components Used:
```bash
function() - generatePassword() - Math.random() - Math.floor() - charAt() method - .toString() method - .push() - .join() - prompt()) - confirm() - addEventListener() - if/else statements - for loop - document.querySelector()
```

## Key Checks Included ensuring the following:
1. When user clicks button to generate password: then user is presented with series of prompts for password criteria
2. When user is prompted for password criteria: then user selects which criteria to include in password
3. When user is prompted for length of password: Then user chooses length of at least 8 characters and no more than 128 characters
4. When user is prompted for character types to include in password: Then user chooses lowercase, uppercase, numeric, and/or special characters
5. When user answers each prompt: Then user input should be validated and at least one character type should be selected
6. When all prompts are answered: Then password is generated that matches the selected criteria
7. When password is generated: Then password is either displayed in an alert or written to the page
