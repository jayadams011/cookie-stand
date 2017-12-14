'use strict';
// data
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookieTable = document.getElementById('allCookies');
var allStores = [];


// Constructor Function which is part of data
function NewStores(name, minCustsPerHour, maxCustsPerHour, avgCookiesPerCust, custsEachHour,cookiesEachHour,totalDailySales){
  this.name = name;
  this.minCustsPerHour = minCustsPerHour;
  this.maxCustsPerHour = maxCustsPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailySales = 0;
  allStores.push(this);
}
// these are part of data - look up name or description
new NewStores('1st and Pike', 23, 65, 6.3);
new NewStores('SeaTac Airport', 3, 24, 1.2);
new NewStores('Seattle Center', 11, 38, 3.7);
new NewStores('Capitol Hill', 20, 38, 2.3);
new NewStores('Alki', 2, 16, 4.6);


//put all actions here.  figure it out later -called define or declared -

NewStores.prototype.calcCustsEachHour = function(){
  for(var i = 0; i < hours.length; i++){
    this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
  }
};

NewStores.prototype.calcCookiesEachHour = function(){
  this.calcCustsEachHour();
  for(var i = 0; i < hours.length; i++){
    var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
    this.cookiesEachHour.push(oneHour);
    this.totalDailySales += oneHour;
  }
};

NewStores.prototype.render = function(){
  this.calcCookiesEachHour();

  // make table here.  Is this an action?????
  // create tr
  // create td
  //function buildInfoRow(){
  var storeRow = document.createElement('tr');

  var storeName = document.createElement('th');
  storeName.textContent = this.name;
  storeRow.appendChild(storeName);


  // create tds, give them content, append for hourly numbers
  for(var i = 0; i < hours.length; i++) {
    var storeSales = document.createElement('td');
    storeSales.textContent = this.cookiesEachHour[i];
    storeRow.appendChild(storeSales);
  }

  var storeDaily = document.createElement('td');
  storeDaily.textContent = this.totalDailySales;
  storeRow.appendChild(storeDaily);

  // Dont forget append the tr to the table
  cookieTable.appendChild(storeRow);

};


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildHeadRow(){

  var headRow = document.createElement('tr');

  var locationNameCol = document.createElement('th');
  locationNameCol.textContent = 'Location Name';
  headRow.appendChild(locationNameCol);

  for(var i = 0; i < hours.length; i++){
    var timeCol = document.createElement('th');
    timeCol.textContent = hours[i];
    headRow.appendChild(timeCol);
  }

  var totalsCol = document.createElement('th');
  totalsCol.textContent = 'Totals';
  headRow.appendChild(totalsCol);

  // append the trheadrow to the table
  cookieTable.appendChild(headRow);
}

function buildFooter(){
  var footRow = document.createElement('tr');

  var hourTotals = document.createElement('tfoot');
  hourTotals.textContent = 'Totals';
  footRow.appendChild(hourTotals);

  // for(var i = 0; i < stores[i]; i++){
  //   var totalsHourSales = 0;
  //   var totalHoursTot = document.createElement('th');
  //   totalHoursTot.textContent = totalsHourSales[i];
  //   footRow.appendChild(hourtotals);
  //}

  //   var
  // };


  cookieTable.appendChild(footRow);
};

//function buildData(){
//  for(var i = 0; i <allStores.length; i++){
//    allStores[i].render();
//}
//}

buildHeadRow();

for(var i = 0; i < allStores.length; i++){
  allStores[i].render();
}

buildFooter();
