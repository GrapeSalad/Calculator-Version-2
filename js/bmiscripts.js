//User Inputs
var height = parseInt(prompt("Enter your height in inches"));
var weight = parseInt(prompt("Enter your weight in lbs"));


//Math on Inputs
height_in_Metric = height * 0.0254;

weight_in_Metric = weight * 2.2;


var bmi = function(h2, w2) {
  return w2 / (h2 * h2);
};

var bmiResult = bmi(height_in_Metric, weight_in_Metric);
//Outputs
alert("BMI is " + bmiResult);
