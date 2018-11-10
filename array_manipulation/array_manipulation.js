function arrayManipulation(n, queries) {
  let array = Array(n + 1).fill(0);
  queries.forEach(query => {
    let startIndex = query[0];
    let endIndex = query[1] + 1;
    let summand = query[2];
    array[startIndex] += summand;
    array[endIndex] -= summand;
  });
  let total = 0;
  let max = 0;
  array.forEach(function(el){
    total += el;
    if (total > max) { max = total; }
  });
  return max;
}

exports.arrayManipulation = arrayManipulation;
