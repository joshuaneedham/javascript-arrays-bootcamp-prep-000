var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var myArray2 = [element, ...array];
  return myArray2;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var myArray2 = [...array, element];
  return myArray2;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;

}

function accessElementInArray(array, index) {
  
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.slice;
  return array;
}

function removeElementFromBeginningOfArray(array) {
  
}

function destructivelyRemoveElementFromEndOfArray(array) {

}

function removeElementFromEndOfArray(array) {

}
