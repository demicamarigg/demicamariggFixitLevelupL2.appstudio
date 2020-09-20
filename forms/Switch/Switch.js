
 // defined variables so that a persons name and state can be entered. 
 
let firstName = prompt("Enter your first name:") 

let stateName = prompt("Enter the abbreviation of the state you are from:")  

// Capitalizes state abreviation if not entered already capitalized

let string = stateName
let result = string.toUpperCase()

//asks user for the current temperature in their state
let stateTemp = Number(prompt("Enter the current temperature of your state in Fahrenheit:")) 

// this generates an array with the messages that will be displayed based on the state and temperature a user enters.
let responses = ["Wear a warm coat, hat, scarf and gloves.", "Wear a warm coat but you won't need a hat, scarf or gloves.", "Wear a less heavy coat .", "Wear a light jacket and smile!", "Have a good day!"]

//Capitalizes first letter of the first name entered

let nameUpper = firstName.charAt(0).toUpperCase()+firstName.slice(1)

//This switch statement determines based on the state and temperature entered, what message will appear to the user. 
//The message box pulls the correct alert from the array that is needed based off of the information the user enters, and displays it to the user.

switch (true) {
      case (result == 'NE' && stateTemp < 32):
           NSB.MsgBox(`${nameUpper}, ${responses[0]}`);
          break
      case (result == 'NE' && stateTemp >= 32 && stateTemp <= 50 ):
          NSB.MsgBox(`${nameUpper}, ${responses[1]}`);
          break
       case (result == 'FL' && stateTemp >= 32 && stateTemp <= 50):
           NSB.MsgBox(`${nameUpper}, ${responses[2]}`);
          break
          case (result == 'FL' && stateTemp >= 50 && stateTemp <= 70):
          NSB.MsgBox(`${nameUpper}, ${responses[3]}`);
          break
          default:
          NSB.MsgBox(`${nameUpper}, ${responses[4]}`);
          }
