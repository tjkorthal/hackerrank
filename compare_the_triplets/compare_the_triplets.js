function getScore(a, b) {
  let zipped = zip(a, b);
  let add = (x, y) => x + y;
  return zipped.map(scorePoint).reduce(add);
}

function scorePoint(arr) {
  if (arr[0] > arr[1]) { return 1; }
  return 0;
}

function zip(a, b) {
  let final = [];
  for (let i = 0; i < a.length; i++) {
    final[i] = [a[i], b[i]];
  }
  return final;
}

a = [5, 6, 7];
b = [3, 6, 10];

function compareTriplets(a, b) {
  return [getScore(a, b), getScore(b, a)];
}

console.log(compareTriplets(a, b))
