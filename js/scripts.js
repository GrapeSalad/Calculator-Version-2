


var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};

var multiply = function(number1, number2){
  return number1 * number2;
};

var divide = function(number1, number2){
  return (number1 / number2).toFixed(3);
};

var modulus = function(number1, number2){
  return number1 % number2;
};

var squareroot = function(number1){
  return Math.sqrt(number1).toFixed(3);
};

// USER PROMPTS
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));



var addResult = add(number1, number2);
var subtractResult = subtract(number1, number2);
var multiplyResult = multiply(number1, number2);
var divideResult = divide(number1, number2);
var modulusResult = modulus(number1, number2);
var sqrtResult = squareroot(number1);


alert("Adding these results in " + addResult);
alert("Subtracting these results in " + subtractResult);
alert("Multiplying these results in " + multiplyResult);
alert("Dividing these results in " + divideResult);
alert("The remainder (modulus) of these results is " + modulusResult);
alert("The square root of this number is " + sqrtResult);
