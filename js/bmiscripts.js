//User Inputs
var height = parseInt(prompt("Enter your height in inches"));
var weight = parseInt(prompt("Enter your weight in lbs"));


//Math on Inputs
height_in_Metric = height * 2.54;

weight_in_Metric = weight * .453592;


var bmi = function(h2, w2) {
  return (w2 / (h2 * h2)) * 10000;
};

var bmiResult = bmi(height_in_Metric, weight_in_Metric);
//Outputs
alert("BMI is " + bmiResult.toFixed(3));
