var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var myArray = [1];

function addElementToBeginningOfArray(array, element) {
  myArray.unshift("foo");
	return myArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  ["foo", ...myArray];
  return myArray;
}
function addElementToEndOfArray(array, element) {

}
function destructivelyAddElementToEndOfArray(array, element) {

}
function accessElementInArray(array, index) {

}
function destructivelyRemoveElementFromBeginningOfArray(array) {

}
function removeElementFromBeginningOfArray(array) {

}
function destructivelyRemoveElementFromEndOfArray(array) {

}
function removeElementFromEndOfArray(array) {

}
