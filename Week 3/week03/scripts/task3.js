/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2){
    return number1 + number2;
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
function addNumbers(){
    number1 = parseInt(document.querySelector("#addend1").value);
    number2 = parseInt(document.querySelector("#addend2").value);
    document.querySelector("#sum").value = add(number1, number2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    number1 = parseInt(document.querySelector("#minuend").value);
    number2 = parseInt(document.querySelector("#subtrahend").value);
    document.querySelector("#difference").value = subtract(number1, number2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
let multiply = (factor1, factor2) => factor1 * factor2;

let mulitplyNumbers = () => {
    factor1 = parseInt(document.querySelector("#factor1").value);
    factor2 = parseInt(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", mulitplyNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

let divide = (dividend, divisor) => dividend / divisor;

let divideNumbers = () => {
    dividend = parseInt(document.querySelector("#dividend").value);
    divisor = parseInt(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
const currDate = new Date().getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").innerHTML = currDate;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
numbers = Array.from(Array(25), (e,i)=>i+1);

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").innerHTML = `[${numbers.join(", ")}]` 

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

oddNumbers = numbers.filter(number => number % 2 !== 0);

document.querySelector("#odds").innerHTML = `[${oddNumbers.join(", ")}]` 

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

evenNumbers = numbers.filter(number => number % 2 === 0);

document.querySelector("#evens").innerHTML = `[${evenNumbers.join(", ")}]` 

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

let addNums = (accum, currValue) => accum + currValue;

const sum = numbers.reduce(addNums);

document.querySelector("#sumOfArray").innerHTML = sum; 

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multiplied = numbers.map(number => number * 2);

document.querySelector("#multiplied").innerHTML = `[${multiplied.join(", ")}]` 

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

//short way
//const sumOfMultiplied = multiplied.reduce(addNums);

const sumOfMultiplied = numbers.map(number => number * 2).reduce((accum, currValue) => accum + currValue);

document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied; 

