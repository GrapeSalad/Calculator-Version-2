//User Inputs
var celsius = parseInt(prompt("Enter Celsius, then press OK to proceed or CANCEL to use Fahrenheit"));
var fahrenheit = parseInt(prompt("If you didn't enter Celsius, enter the Fahrenheit now and press OK."));

//Math on Inputs

var CtoF = function(celsius){
  return celsius * 1.8 + 32;
};

var FtoC = function(fahrenheit){
  return fahrenheit / 1.8 - 32;
};

//Outputs
alert("Your celsius was " + celsius + " ; that temp in F is " + CtoF(celsius) + ".");
alert("Your Fahrenheit was " + fahrenheit + " ; that temp in C is " + FtoC(fahrenheit) + ".");
