function rotLeft(a, d) {
  return a.slice(d).concat(a.slice(0, d));
}

let a = [1, 2, 3, 4, 5];
let d = 4;

console.log(rotLeft(a, d));
