let magicNumber = 3;
let min = 1;
let max = 100;

let guessNumber = prompt(`Guess a number between ${min} and ${max}?`);

guessNumber = parseInt(guessNumber);

if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
  console.log(
    "you didn't give me a valid number between ${min} and ${max} >:("
  );
} else {
  if (guessNumber == magicNumber) {
    console.log("Congrats! You guessed the magic number.");
  } else if (guessNumber > magicNumber) {
    console.log("Guess was too high :/. Try again.");
  } else if (guessNumber < magicNumber) {
    console.log("Guess was too low >:(. Try again.");
  }
}

let birthMonth = prompt("Please input your birth month:");

switch (birthMonth.toLowerCase()) {
  case "december":
  case "january":
  case "february":
    console.log("Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("Summer");
    break;
  case "september":
  case "october":
  case "november":
    console.log("Fall");
    break;
  default:
    console.log("I don't recognize that month...");
}

// Exercise 3: Business Logic between Attire Codes

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

//if (typeId == "01") {
//type = "Tank top";
//} else if (typeId == "02") {
//type = "T-Shirt";
//} else if (typeID == "03") {
//type = "Long Sleeve";
//} else if (typeID == "04") {
//type == "Sweat Shirt";
//} else {
//type = "Other";
//}

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T- Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
    break;
}

//if (colorId == "BL") {//
//color = "Black";
//} else if (colorId == "BU") {//
//color = "Blue";
//} else if (colorId == "RD") {//
//color = "Red";
//} else if (colorId == "PU") {//
//color = "Purple";
//} else {//
//color = "White";
//}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
    break;
}

//if (sizeId == "S") {
//size = "Small";
//} else if (sizeId == "M") {
//size = "Medium";
//} else if (sizeId == "L") {
//size = "Large";
//} else if (sizeId == "XL") {
//size = "Extra Large";
//} else {
//size = "One Size Fits All";
//}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
    break;
}

console.log(`Product: ${size} ${color} ${type}`);

let answer = 12;
let x = 4;
let y = 3;

if (x * y == answer) {
  console.log("If/Else: Correct");
} else {
  console.log("If/Else: Incorrect");
}

switch (true) {
  case typeof answer == "number":
    console.log("Correct input type...");
  case x * y == answer:
    console.log("Switch: Correct answer");
    break;
  default:
    console.log("Switch: Incorrect");
}
