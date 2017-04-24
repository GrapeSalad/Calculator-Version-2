
//User Inputs

var unitToBeConvertedRaw = prompt("Enter unit to be converted - must be GALLONS or LITERS");
var unitToBeConvertedFixed = unitToBeConvertedRaw.toLowerCase();

var quantity = parseInt(prompt("Enter quantity in " + unitToBeConvertedFixed));

var unitToConvertToRaw = prompt("What would you like to convert " + quantity + " " + unitToBeConvertedFixed + " to? You can choose from GALLONS, LITERS, CUPS, QUARTS, and OUNCES.");
var unitToConvertToFixed = unitToConvertToRaw.toLowerCase();


//Math Inputs
var result = function(unitToBeConvertedFixed, quantity, unitToConvertToFixed){

  if (unitToBeConvertedFixed === "gallons") {
    if (unitToConvertToFixed === "liters") {
     return (quantity * 3.785411784);
    };
    if (unitToConvertToFixed === "cups") {
     return (quantity * 16);
    };
    if (unitToConvertToFixed === "quarts") {
     return (quantity * 4);
    };
    if (unitToConvertToFixed === "ounces") {
     return (quantity * 128);
    };
  };

  if (unitToBeConvertedFixed === "liters") {
    if (unitToConvertToFixed === "gallons") {
     return (quantity * 0.264172);
    };
    if (unitToConvertToFixed === "cups") {
     return (quantity * 4.16666);
    };
    if (unitToConvertToFixed === "quarts") {
     return (quantity * 1.05669);
    };
    if (unitToConvertToFixed === "ounces") {
     return (quantity * 33.814);
    };
  };

};

//Outputs
  alert(quantity + " " + unitToBeConvertedFixed + " is " + result(unitToBeConvertedFixed, quantity, unitToConvertToFixed).toFixed(3) + " " + unitToConvertToFixed)
