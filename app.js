'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN docs
}
var cookieTable = document.getElementById('allCookies');
var allStores = [];

// Constructor Function
function NewStores(name, minCustsPerHour, maxCustsPerHour, avgCookiesPerCust, custsEachHour,cookiesEachHour,totalDailySales){
  this.name = name;
  this.minCustsPerHour = minCustsPerHour;
  this.maxCustsPerHour = maxCustsPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailySales = 0;
  allStores.push(this);
  this.calcCustsEachHour = function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  };
  this.calcCookiesEachHour = function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
    }

  };
  this.render = function(){
    this.calcCookiesEachHour();

    //  var allCookies = document.getElementById('allCookies');

    var headrow = document.createElement('tr');
    var locationNameCol = document.createElement('th');
    locationNameCol.innertext = 'Location Name';
    headrow.appendChild(locationNameCol);

    for(var i = 0; i < hours.length; i++){
      var timeCol = document.createElement('th');
      timeCol.innertext = hours[i];
      headrow.appendChild(timeCol);
    };

    var totalsCol = document.createElement('th');
    totalsCol.innertext = 'Totals';
    headrow.appendChild(totalsCol);

    // append the trheadrow to the table
    cookieTable.appendChild(headrow);
  };

  //};

};
// We need to access the table that is in the DOM (how do we loop this into the html using id?)
//var cookieTable = document.getElementById('allCookies');

allStores.push(this);
this.render = function() {

};

new NewStores('1st and Pike', 23, 65, 6.3);
new NewStores('SeaTac Airport', 3, 24, 1.2);
new NewStores('Seattle Center', 11, 38, 3.7);
new NewStores('Capitol Hill', 20, 38, 2.3);
new NewStores('Alki', 2, 16, 4.6);

for(var i = 0; i < allStores.length; i++){
  allStores[i].render();
};
