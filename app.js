'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN docs
}
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

  };
}

    //  access the element in the DOM where our stuff will go
      var ulEl = document.getElementById('id');
      // console.log(ulEl, 'ulEl');

        // create an element
        var liEl = document.createElement('li');

        // give it content
        // 11am: 77 cookies
        liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';

        // append it to the parent
        ulEl.appendChild(liEl);
      //}
      liEl = document.createElement('li');
      liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
      ulEl.appendChild(liEl);
},
render: function(){
      this.calcCookiesEachHour();
}

  };






new NewStores('1st and Pike', 23, 65, 6.3);
new NewStores('SeaTac Airport', 3, 24, 1.2);
new NewStores('Seattle Center', 11, 38, 3.7);
new NewStores('Capitol Hill', 20, 38, 2.3);
new NewStores('Alki', 2, 16, 4.6);


for(var i = 0; i < allStores.length; i++){
  allStores[i].render();
}
