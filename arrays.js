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

}

function destructivelyAddElementToEndOfArray(array, element) {

}

function accessElementInArray(array, index) {
  array[index];
  return index;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {


}

function removeElementFromBeginningOfArray(array) {

}

function destructivelyRemoveElementFromEndOfArray(array) {

}

function removeElementFromEndOfArray(array) {

}
