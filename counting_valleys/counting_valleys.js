let steps = 8;
let route = 'UDDDUDUU';

function countingValleys(n, s) {
  let elevation = 0;
  let valleys = 0;
  s.split('').forEach(element => {
    if (element == 'U') {
      elevation++;
      if (elevation == 0) { valleys++; }
    } else {
      elevation--;
    }
  });
  return valleys;
}

console.log(countingValleys(steps, route));
