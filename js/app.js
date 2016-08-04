'use strict';
var form = document.getElementById('conversionForm');
var result;
var conUnit;
var unit;

function convertToIn() {
  result = (userValue * 0.03937);
  conUnit = 'inches';
}

function convertToCm() {
  result = (userValue * 2.54);
  conUnit = 'Cm';
}

function convertToFlOz() {
  result = (userValue * 29.574);
  conUnit = 'Fluid Ounces';
}

function convertTomL() {
  result = (userValue / 0.033814);
  conUnit = 'Milliliters';
}

function convertToMiles() {
  result = (userValue * 1.6093);
  conUnit = 'Miles';
}

function convertToKm() {
  result = (userValue * 0.6214);
  conUnit = 'Kilometers';
}

function convertToLbs() {
  result = (userValue * 2.2046);
  conUnit = 'Pounds';
}

function convertToKg() {
  result = (userValue * 0.4536);
  conUnit = 'Kilograms';
}

function convertToEnTon() {
  result = (userValue * 1.1023);
  conUnit = 'English Ton';
  console.log('who the heck does that?');
}

function convertToMeTon() {
  result = (userValue * 0.9072);
  conUnit = 'Metric Ton';
  console.log('I mean, seriously, who does that?');
}


function handleConversion() {
  event.preventDefault();
  var userValue = parseFloat(event.target.userValue.value);
  var unit = event.target.option.value;

  if (unit === null) {
    alert('Yo, pick a unit dude.');
  }else if (unit === 'in') {
    convertToCm();
    console.log('converted to cm');
  }

}

conversionForm.addEventListener('submit', handleConversion);
