function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.forEach(element => {
    if (element > 0) { positive++; }
    if (element == 0) { zero++; }
    if (element < 0) { negative++; }
  });
  logFractions(positive, negative, zero);
}

function logFractions(pos, neg, zero) {
  let total = pos + neg + zero;
  console.log((pos / total).toFixed(6));
  console.log((neg / total).toFixed(6));
  console.log((zero / total).toFixed(6));
}
arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);
