
// Celsius to fahrenheit conversion
document.getElementById("btn-1").onclick = function(){
 var input = document.getElementById("input_value").value;
var output = (input * 9 / 5) + 32;
document.getElementById("result").innerHTML = "Result is  " + output.toFixed(2) + " " + "F";
}

// Fahrenheit to Celsius conversion 
document.getElementById("btn-2").onclick = function(){
    var input = document.getElementById("input_value").value;
   var output = (input - 32) * (5/9);
   document.getElementById("result").innerHTML = "Result is  "+output.toFixed(2) + " " + "C";
   }

   //Feets to Meters conversion
   document.getElementById("btn-3").onclick = function(){
    var input = document.getElementById("input_value").value;
   var output = input * 0.3048;
   document.getElementById("result").innerHTML = "Result is  "+output.toFixed(2) + " " + "meters";
   }

   //Meters to feets conversion
   document.getElementById("btn-4").onclick = function(){
    var input = document.getElementById("input_value").value;
   var output = input / 0.3048 ;
   document.getElementById("result").innerHTML = "Result is  "+output.toFixed(2) + " " + "Feet";
   }

   //Inches to Centimeters convertion
   document.getElementById("btn-5").onclick = function(){
    var input = document.getElementById("input_value").value;
   var output = input * 2.54;
   document.getElementById("result").innerHTML = "Result is  "+output.toFixed(2) + " " + "cm";
   }

   //Centimeters to Inches convertion
   document.getElementById("btn-6").onclick = function(){
    var input = document.getElementById("input_value").value;
   var output =  input / 2.54;
   document.getElementById("result").innerHTML = "Result is  "+output.toFixed(2) + " " + "inches";
   }

   //Pounds to Kilogram conversion
   document.getElementById("btn-7").onclick = function(){
    var input = document.getElementById("input_value").value;
   var output =  input * 0.45359237;
   document.getElementById("result").innerHTML = "Result is  "+output.toFixed(2) + " " + "kg";
   }

   //Kilogram to Pounds conversion
   document.getElementById("btn-8").onclick = function(){
    var input = document.getElementById("input_value").value;
   var output =  input / 0.45359237;
   document.getElementById("result").innerHTML = "Result is  "+output.toFixed(2) + " " + "pounds";
   }

   document.getElementById("btn-9").onclick = function(){
    document.getElementById("input_value").value = " ";
    document.getElementById("result").innerHTML = "";
    document.getElementById("input_value").focus();
  }