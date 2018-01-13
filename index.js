// Code your solution in this file.

function lowerCaseDrivers(arr) {
  return arr.map(word => word.toLowerCase())
}

function nameToAttributes(arr) {
  const newArr = arr.map(function(word) {
    newWord = word.split(" ");
    Object.assign(firstName: newWord[0], lastName: newWord[1]);
  })
  return newArr;
}
