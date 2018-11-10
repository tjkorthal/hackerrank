'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function timeConversion(s) {
  let hours = parseInt(s.slice(0, 2));
  let minSeconds = s.slice(3, -2);
  let amPM = s.slice(-2);

  const parseChunk = n => n.toString(10).padStart(2, '0');

  if (s === "12:00:00PM") {
    hours = 0;
  } else if (amPM == 'PM' && hours != 12) {
    hours += 12;
  } else if (amPM == 'AM' && hours == 12) {
    hours = 0;
  }
  return `${parseChunk(hours)}:${minSeconds}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const s = readLine();
  let result = timeConversion(s);

  ws.write(result + "\n");
  ws.end();
}
