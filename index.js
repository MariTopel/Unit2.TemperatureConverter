tempF = 0;

function convertToCelcius(tempF) {
  var tempC = (tempF - 32) / 1.8;
  alert(tempC);
  return tempC;
}

/* console.log(convertToCelcius(tempF)); */

function describeTemperature(tempF) {
  tempC = convertToCelcius(tempF);
  if (tempC < 0) {
    alert("very cold");
  } else if (tempC < 20) {
    alert("cold");
  } else if (tempC < 30) {
    alert("warm");
  } else if (tempC < 40) {
    alert("hot");
  } else {
    alert("very hot");
  }
}

/* console.log(describeTemperature(tempF)); */
