function jumpingOnTheClouds(c) {
  let jumps = 0;
  let currentCloud = 0;
  while(currentCloud < c.length - 1) {
    if (c[currentCloud + 2] == 0) {
      currentCloud += 2;
    } else {
      currentCloud += 1;
    }
    jumps++;
  }
  return jumps;
}

var clouds = [0,0,0,0,1,0];

console.log(jumpingOnTheClouds(clouds));
