const name = "John Smith";

/*
Declare and define the following variables:

name with the value "John Smith"
age with the value 55
height with the value 175.5
favoriteColors as an array with the following items "Red", "Green" and "Blue"
user as an object with the fields:
name with the value "John Smith"
age with the value 55
height with the value 175.5
favoriteColors as an array with the following items "Red", "Green" and "Blue"
*/

const age = 55;

const height = 175.5;

const favoriteColors = ["Red", "Green", "Blue"];

const user = {
  name,
  age,
  height,
  favoriteColors,
};

module.exports = {
  name,
  age,
  height,
  favoriteColors,
  user,
};

/*
Write a function repeatString(string, n) that repeats the given string n times.
repeatString("foo", 0);    // Should return ""
repeatString("foo", 1);    // Should return "foo"
repeatString("foo", 2);    // Should return "foofoo"
*/

function repeatString(string, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += string;
  }
  return result;
}

module.exports = {
  repeatString,
};

/*
Create a function sayHey that returns the string "Hey".
Create a function square that takes a number as an argument and return the square of that number.
sayHey();   // Should return "Hey"
square(2);  // Should return 4
*/

function sayHey() {
  return "Hey";
}

function square(x) {
  return x * x;
}

module.exports = {
  sayHey,
  square,
};

/*
Write a function isHeavy(weight) that takes in a number and returns true if weight is >= 100, false otherwise.
Implement a function dayName(dayOfWeek) that takes a number in the range [0-6] and return the week name corresponding to the number.
isHeavy(5);     // should return false
isHeavy(100);   // should return true

dayName(0);     // should return "Sunday"
dayName(1);     // should return "Monday"
dayName(6);     // should return "Sunday"
*/

function isHeavy(weight) {
  return weight >= 100;
}

function dayName(dayOfWeek) {
  switch (dayOfWeek) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return null;
  }
}

module.exports = {
  isHeavy,
  dayName,
};

/*

*/
