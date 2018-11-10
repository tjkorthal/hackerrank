'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
                           .split('\n')
                           .map(str => str.replace(/\s*$/, ''));
  main();
});

function readLine() {
  return inputString[currentLine++];
}


function miniMaxSum(arr) {
  const add = (a, b) => a + b;
  const findSum = array => array.reduce(add, 0);
  let maxArray = Array.from(arr);
  let minArray = Array.from(arr);
  remove(maxArray, Math.min);
  remove(minArray, Math.max);
  console.log(`${findSum(minArray)} ${findSum(maxArray)}`);
}

function remove(array, filter) {
  return array.splice(array.indexOf(filter.call(null, ...array)), 1);
}

function main() {
  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
  miniMaxSum(arr);
}
