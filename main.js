// variable myAge is your age in years.
const myAge = 43;

// variable earlyYears has a value of 2. This variable is allowed to change. 
var earlyYears = 2;

earlyYears = earlyYears * 10.5;

// already accounted for the first 2 years, subtract 2 from myAge for the variable laterYears.
var laterYears = myAge - 2;

// using the multiplication assignment operator to multiply and assign the variable by 4 in one step. 
laterYears *= 4;

// double checking the math values for earlyYears and laterYears
console.log(earlyYears);
console.log(laterYears);

// Add earlyYears and laterYears together to form a new variable myAgeInDogYears.
var myAgeInDogYears = earlyYears + laterYears;

// myName as string and using the toLowerCase method to return the string with all lowercase letters.
var myName = 'Peter'

myName.toLowerCase();

// using string interpolation to display the desire variable values into the sentence below.
console.log(`My name is ${myName.toLowerCase()}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
