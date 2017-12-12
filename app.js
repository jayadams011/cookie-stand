'use strict';

var hourlyList = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var store = [firstAndPike, seaTac, seaCenter, capHill, alki];


var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookSale: 6.3,
  avgCust: function(){
    return Math.round(Math.random()) * (this.maxCust - this.minCust) + this.minCust;
  },

  cookPerHour: function(){
    var custAtHour = [];
    for (var i = 0; i < hourlyList.length; i++) {
      custAtHour.push(this.avgCust * this.avgCookSale);
      return custAtHour;
    }
    avgCust();
    cookPerHour();
  }
};



var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookSale: 1.2,
  avgCust: function(){
    return Math.round(Math.random()) * (this.maxCust - this.minCust) + this.minCust;
  },
  cookPerHour: function(){
    var custAtHour = [];
    for (var i = 0; i < hourlyList.length; i++) {
      custAtHour.push(this.avgCust * this.avgCookSale);
      return custAtHour;
    }
    avgCust();
    cookPerHour();
  },
};


var seaCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookSale: 3.7,
  avgCust: function(){
    return Math.round(Math.random()) * (this.maxCust - this.minCust) + this.minCust;
    console.log(avgCust);
  },
  cookPerHour: function(){
    var custAtHour = [];
    for (var i = 0; i < hourlyList.length; i++) {
      custAtHour.push(this.avgCust * this.avgCookSale);
      return custAtHour;
    }
    avgCust();
    cookPerHour();
  }
};


var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookSale: 2.3,
  avgCust: function(){
    return Math.round(Math.random()) * (this.maxCust - this.minCust) + this.minCust;
  },
  cookPerHour: function(){
    var custAtHour = [];
    for (var i = 0; i < hourlyList.length; i++) {
      custAtHour.push(this.avgCust * this.avgCookSale);
      return custAtHour;
    }
    avgCust();
    cookPerHour();
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookSale: 4.6,
  avgCust: function(){
    return Math.round(Math.random()) * (this.maxCust - this.minCust) + this.minCust;
  },
  cookPerHour: function(){
    var custAtHour = [];
    for (var i = 0; i < hourlyList.length; i++) {
      custAtHour.push(this.avgCust * this.avgCookSale);
      return custAtHour;
    }
    avgCust();
    cookPerHour();
  }
};

function makeHTML() {
  var container = document.createElement('div');
  var listArr = [];
  var list = document.createElement('ul');
  var fullList = listArr.join('');
  for (var i = 0; i < hourlyList.length; i++) {
    listArr.push('<li>' + hourlyList[i] + store.cookPerHour[i] + '</li>');
    container.innerHTML = '<p>' + hourlyList[0] + store.avgCust() + '</p>';
    document.body.appendChild(container);
    list.innerHTML = fullList;
    document.body.appendChild(list);
  }

  //var printStore.cookPerHour(store) {
  //return store.avgCust;
}
//}
makeHTML();








// // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// //
// // Store the results for each location in a separate array... perhaps as a property of the object representing that location
// //
// // Display the values of each array as unordered lists in the browser
// //
// // Calculating the sum of these hourly totals; your output for each location should look like this:
// //
// // 1st and Pike
// //
// // 6am: 16 cookies
// // 7am: 20 cookies
// // 8am: 35 cookies
// // 9am: 48 cookies
// // 10am: 56 cookies
// // 11am: 77 cookies
// // 12pm: 93 cookies
// // 1pm: 144 cookies
// // 2pm: 119 cookies
// // 3pm: 84 cookies
// // 4pm: 61 cookies
// // 5pm: 23 cookies
// // 6pm: 42 cookies
// // 7pm: 57 cookies
// // 8pm: 29 cookies
// // Total: 657 cookies
// // Display the lists on sales.html. We will be adding features to this application and working with its layout throughout the week.function makeHTML() {
//
//
//
// //////
