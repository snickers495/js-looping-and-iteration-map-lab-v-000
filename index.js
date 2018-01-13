// Code your solution in this file.

function lowerCaseDrivers(arr) {
  return arr.map(word => word.toLowerCase())
}

function nameToAttributes(arr) {
  const newArr = arr.map(function(word) {
    const newWord = word.split(" ");
    const first = {firstName: newWord[0]};
    const last = {lastName: newWord[1]}
    return Object.assign((firstName: newWord[0]), (lastName: newWord[1]));
  })
  return newArr;
}
