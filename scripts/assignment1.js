/* Task 1:
Calculate the zakat value, first, create a variable named "zakatPercentage" and store the value of 2.5% in it (hint: 2.5% means 0.025).
Next, create another variable named "userInput" and take the input from the user using the prompt. Make sure the input value is of a type number by converting the input string to a number using a suitable method.
Then, create a variable named "result" and assign its value to the multiplication of the zakat percentage and user input. Finally, use an alert message to display the calculated zakat value. The message should look like this: "Your zakat value is xxx". */

var userAmount = +prompt("Enter Your Amonunt");
var zakatAmount = 0.025 * userAmount;
alert("Your Zakat amount will be " + zakatAmount);



/* Task 2:
calculate the fitrah amount, first, ask the user to enter the total number of family members using the prompt and store the value in a variable called "familyMembers".
Next, ask the user to choose a fitrah method by providing them options using the prompt, and store the selected method and its price in variables. Then, use an if-else block to check the user's input and calculate the fitrah amount by multiplying the selected method's price with the number of family members. Finally, display the calculated fitrah amount using an alert message. */


var familyMembers = +prompt("Enter the number of family members:");
var fitrahMethod = prompt("According to which product price you want to give fitrah? \n(Note: Enter the product's name) \n1. Wheat (Rs. 250) \n2. Barley (Rs. 450) \n3. Dates (Rs. 2100) \n4. Raisin (Rs. 2800)").toLowerCase();

if (fitrahMethod === "wheat"){
    alert("Your total fitrah amount is " + familyMembers*250);
} else if (fitrahMethod === "barley"){
    alert("Your total fitrah amount is " + familyMembers*450);
} else if (fitrahMethod === "dates"){
    alert("Your total fitrah amount is " + familyMembers*2100);
} else if (fitrahMethod === "raisin"){
    alert("Your total fitrah amount is " + familyMembers*2800);
} else {
    alert("Enter a valid product name");
}



/* Task 3:
Create a program that generates a random number between 1 and 10 and stores it in a variable called "secretNumber". Then, ask the user to enter a guess for the secret number using a prompt. 
Use an if-else statement to check if the user's guess matches the secret number. If the guess is correct, display a message using an alert saying "Congratulations! You guessed the secret number". 
Otherwise, if the guess is too high or too low, display an appropriate message informing the user to guess again. */


var secretNumber = 5;
var guessedNumber = +prompt("Guess the secret number (between 1 and 10)");
if (guessedNumber === secretNumber) {
alert("Congratulations! You guessed the secret number");
} else if (guessedNumber < secretNumber && guessedNumber >= 1) {
alert("Sorry, your guess is too low. Please try again.");
} else if (guessedNumber > secretNumber && guessedNumber <= 10) {
alert("Sorry, your guess is too high. Please try again.");
} else {
alert("Invalid input. Please enter a number between 1 and 10.");
}



/* Task 4:
Create a program that asks the user to enter a name, and then prints out the name with the first letter capitalized (Make your name in capitalized case). */


var userName = prompt("Enter your name:");
alert(userName[0].toUpperCase() + userName.slice(1).toLowerCase());



/* Task 5:
In this task, you will be creating two empty arrays called "contactNumbers" and "contactNames". Using the prompt, you will ask the user to enter a contact number and contact name. 
You will then push these values into their respective arrays using the push method. After adding all the contacts, you will display the contact numbers and names in the console.
To do this, you will need to use a for loop to iterate through both arrays and log each element to the console. */

let contactNumbers = [];
let contactNames = [];

const contactCount = parseInt(prompt("How many contacts do you want to add?"));

for(i = 0; i < contactCount; i++){
  const number = prompt("Enter contact number:");
  const name = prompt("Enter contact name:");
  contactNumbers.push(number);
  contactNames.push(name);
}

for (i = 0; i < contactCount; i++) {
    console.log("Contact " + [i + 1] + ": " + contactNames[i], "-", contactNumbers[i])
}



/* Task 6:
Create an Array that contains different products, and get input from the user in which you ask your user to give the position of that element he/she wants. 
Now remove that Item from your array and console the removed item, Also display the remaining items in the array and total number of items remaining. */

var items = ["Mango", "Apple", "Orange", "Grape", "Banana"];
var position = +prompt("Enter the position of item you want to remove \n" + items);

var removedItem = items.splice(position - 1, 1);
console.log("Removed item:", removedItem);
console.log("Remaining items:", items);
console.log("Total number of items remaining:", items.length);



/* Task 7:
Create a program that asks the user for their nationality, gender, and age using the prompt function. The program should then use nested if-else statements to determine if the person is eligible to vote. 
First, the program should check if the person is Pakistani or Indian. If they are not, the program should display a message saying they are not eligible to vote. 
If they are Pakistani or Indian, the program should then check their gender. If the person is male and over the age of 18, they are eligible to vote. If the person is female and over the age of 18, the program should ask if they are married. If they are married, they are eligible to vote. If they are not married, they are not eligible to vote. 
If the person is under 18, the program should display a message saying they are not eligible to vote. */

var nationality = prompt("Enter your nationality").toLowerCase();

if (nationality == "pakistani" || nationality == "indian") {
var gender = prompt("Enter your gender (Male/Female)").toLowerCase();
var age = +prompt("Enter your age");

  if (gender == "male" && age >= 18) {
    console.log("You are eligible to vote.");
  } else if (gender == "female" && age >= 18) {
    var martialStatus = prompt("Are you married (Yes/No)").toLowerCase();
    if (martialStatus == "yes") {
      console.log("You are eligible to vote.");
    } else {
      console.log("You are not eligible to vote.");
    }
  } else {
    console.log("You are not eligible to vote.");
  }
} else {
  console.log("You are not eligible to vote.");
}



/* Task 8:
You have an array of that contains the name of  Pakistani Teams Player selected for WorldCup (15 Players) named as WorldCupSquad.
Now tomorrow we have a match with India, So make an array of final team players (11 Players) that will be playing in tomorrows match from the WorldCupSquad array. */

var worldCupSquad = ["Babar Azam", "Muhammad Rizwan", "Fakhar Zaman", "Azam Khan", "Shoaib Malik", "Iftikhar Ahmad", "Muhammad Haris", "Shadab Khan", "Imad Wasim", "Naseem Shah", "Haris Rauf", "Shaheen Shah Afridi", "Hasan Ali", "Shan Masood", "Asif Ali"]; 
var finalTeam = worldCupSquad.slice();

finalTeam.splice(9, 1);
finalTeam.splice(4, 1);
finalTeam.splice(12 ,1);
finalTeam.splice(2, 1);

console.log("World Cup Squad", worldCupSquad);
console.log("Final Team", finalTeam);