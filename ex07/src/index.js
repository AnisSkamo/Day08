// Only change code below this line
var sum = 0;
function addThree(num) {
    addThree = sum + 3;
}
addThree(3);

function addFive(num) {
    addFive = addThree + 5;
}
addFive(5);
console.log(addThree);
console.log(addFive);

// Only change code above this line
module.exports = {
    addThree,
    addFive
};