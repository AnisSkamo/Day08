// Only change code below this line
function localScope () {
    var myVariable = "I am here";
    console.log(localScope);
}
myVariable();
console.log(localScope);
// Only change code above this line

//myVariable is not defined outside od localScope
if (typeof myVariable != "undefined") {
    console.log("outside localScope", myVariable)
} else {
    console.log("outside localScope UNDEFINED!!!")
}
module.exports = localScope;
