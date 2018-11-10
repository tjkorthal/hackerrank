'use strict';

const fs = require('fs');
const startTime = Date.now();
const {arrayManipulation} = require('./array_manipulation.js');

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

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const nm = readLine().split(' ');
  const n = parseInt(nm[0], 10);
  const m = parseInt(nm[1], 10);
  let queries = Array(m);

  for (let i = 0; i < m; i++) {
    queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
  }

  let result = arrayManipulation(n, queries);
  const totalTime = (Date.now() - startTime) / 1000;
  console.log(result);
  console.log(`Took ${totalTime} seconds to execute`);
  ws.write(result + "\n");
  ws.end();
}
