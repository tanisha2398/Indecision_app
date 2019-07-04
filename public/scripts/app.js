"use strict";

var add = function add(a, b) {
  //   console.log(arguments);
  return a + b;
};
console.log(add(2, 3));

// const user = {
//   name: "Tanisha",
//   cities: ["rawatbhata", "dehradun", "kota"],
//   printPlacesLived: function() {
//     // console.log(this.name);
//     // console.log(this.cities);
//     const that = this;
//     this.cities.forEach(function(city) {
//       console.log(that.name + "has lived in  " + city);
//     });
//   }
// };
// user.printPlacesLived();
var user = {
  name: "Tanisha",
  cities: ["rawatbhata", "dehradun", "kota"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });
    // return cityMessages;
    // console.log(this.name);
    // console.log(this.cities);
    //   const that = this;
    // this.cities.forEach(city => {
    //   console.log(this.name + "has lived in  " + city);
    // });
  }
};
console.log(user.printPlacesLived());

var multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());
