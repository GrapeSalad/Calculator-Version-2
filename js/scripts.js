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
    var operatorType = $("input:radio[name=operator]:checked").val();
    console.log(operatorType);

    if(operatorType === "add"){
      $("#output").text("Adding these results in " + add(number1, number2));
    };

    if(operatorType === "subtract") {
      $("#output").text("Subtracting these results in " + subtract(number1, number2));
    };

    if(operatorType === "multiply") {
      $("#output").text("Multiplying these results in " + multiply(number1, number2));
    };

    if(operatorType === "divide") {
      $("#output").text("Dividing these results in " + divide(number1, number2));
    };

    if(operatorType === "modulus") {
      $("#output").text("The remainder (modulus) of these results is " + modulus(number1, number2));
    };

    if(operatorType === "sqrt") {
      $("#output").text("The square root of this number is " + squareroot(number1));
    };
  });
});
