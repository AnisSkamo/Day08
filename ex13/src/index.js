// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * Math.floor(maxNumber));
};
console.log(randomRangeNumber(7,14));
randomRangeNumber();
  // expected output: a number from 0 to <1
// Only change code above this line
module.exports = randomRangeNumber;