/* eslint-disable strict */
function toh(num, source, dest, temp) {
  if (num === 1) {
    print(source, dest);
    return;
  } else {
    toh(num - 1, source, temp, dest);
    print(source, dest);
    toh(num - 1, temp, dest, source);
  }
}

function print(source, dest) {
  console.log(`${source} -> ${dest}`);
}

toh(4, 'A', 'C', 'B');
