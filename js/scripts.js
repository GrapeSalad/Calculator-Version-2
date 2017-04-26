//BUSINESS LOGIC
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
//INTERFACE LOGIC
$(document).ready(function() {
  $("form#numberEntry").submit(function(event){
    event.preventDefault();

    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());

    $("#outputAdd").text("Adding these results in " + add(number1, number2));    $("#outputSubtract").text("Subtracting these results in " + subtract(number1, number2));
    $("#outputMultiply").text("Multiplying these results in " + multiply(number1, number2));
    $("#outputDivide").text("Dividing these results in " + divide(number1, number2));
    $("#outputModulus").text("The remainder (modulus) of these results is " + modulus(number1, number2));
    $("#outputSqrRt").text("The square root of this number is " + squareroot(number1));
  });
});
