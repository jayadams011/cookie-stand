'use strict';
// data
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookieTable = document.getElementById('allCookies');
var form = document.getElementById('shop_data_form');
var allStores = [];


// Constructor Function which is part of data
function NewStores(name, minCustsPerHour, maxCustsPerHour, avgCookiesPerCust){
  this.name = name;
  this.minCustsPerHour = minCustsPerHour;
  this.maxCustsPerHour = maxCustsPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.DailySales = [];
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailySales = 0;
  allStores.push(this);
}
// these are part of data - object instantiators They can go inot a var
new NewStores('1st and Pike', 23, 65, 6.3);
new NewStores('SeaTac Airport', 3, 24, 1.2);
new NewStores('Seattle Center', 11, 38, 3.7);
new NewStores('Capitol Hill', 20, 38, 2.3);
new NewStores('Alki', 2, 16, 4.6);

function formData(event) {

  event.preventDefault();

  var name = event.target.name.value;
  var minCustsPerHour = event.target.minCustsPerHour.value;
  var maxCustsPerHour = event.target.maxCustsPerHour.value;
  var avgCookiesPerCust = event.target.avgCookiesPerCust.value;

  new NewStores(name, minCustsPerHour, maxCustsPerHour, avgCookiesPerCust);

  document.getElementById('allCookies').innerHTML = '';
  main();
  form.reset();
};

//form.addEventListener('submit',formData);


//put all actions here.  figure it out later -called define or declared -

//
NewStores.prototype.calcCustsEachHour = function(){
  for(var i = 0; i < hours.length; i++){
    var randomCust = Math.floor(Math.random() * (this.maxCustsPerHour - this.minCustsPerHour + 1)) + this.minCustsPerHour;
    this.custsEachHour.push(randomCust);
  }
};

//
NewStores.prototype.calcCookiesEachHour = function(){
  this.calcCustsEachHour();
  for(var i = 0; i < hours.length; i++){
    var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
    this.cookiesEachHour.push(oneHour);
    this.totalDailySales += oneHour;
  }
};

//
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



//
function buildFooter(){
  var footRow = document.createElement('tr');

  // Create header
  var hourTotals = document.createElement('th');
  hourTotals.textContent = 'Totals';
  footRow.appendChild(hourTotals);

  // Total cookie sale per hours for all stores
  var totalsHourSales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for(var i = 0; i < allStores.length; i++){
    for (var j = 0; j < hours.length; j++) {
      totalsHourSales[j] += allStores[i].cookiesEachHour[j];
    }
  }

  for (var k = 0; k < totalsHourSales.length; k++) {
    var totalHoursTot = document.createElement('td');
    totalHoursTot.textContent = totalsHourSales[k];
    footRow.appendChild(totalHoursTot);
  }

  cookieTable.appendChild(footRow);
};



function main() {
  buildHeadRow();

  for(var i = 0; i < allStores.length; i++){
    console.log(allStores);
    allStores[i].render();
  };

  buildFooter();
}

main();

form.addEventListener('submit', formData);
