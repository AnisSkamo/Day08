//Only change code below this line
function mathTest(x,y) {
// Only change code above this line
if (x < 0 || y < 0) {
    //Only change code below this line
    return undefined;
    //Only change code above this line
}
return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));
}
// Only change code below this line
console.log(2, 2);
console.log(2, 2);
console.log(-2, 2);
console.log(2, -2);
console.log(2, 8);
console.log(3, 3);
console.log(0, 0);
mathTest();
module.exports = mathTest;