function staircase(n) {
  let currentString;
  for (let i = 1; i <= n; i++) {
    currentString = Array(n).fill(' ')
                            .fill('#', i * -1)
                            .join('');
    console.log(currentString);
  }
}

staircase(6);
