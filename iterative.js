/* eslint-disable strict */

// 1.
const countSheep = function(n) {
  for (let i = n; i >= 0; --i) {
    if (i === 0) console.log('All sheep jumped over the fence');
    else console.log(`${i}: Another sheep jumps over the fence`);
  }
  return true;
};

//countSheep(3);

//2.

const powerCalc = function(base, exponent) {
  origBase = base;
  for (let i = 2; i <= exponent; i++) {
    base *= origBase;
  }
  return base;
};

//console.log(powerCalc(10, 4));

//3.

const revStr = function(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

//console.log(revStr('reversed'));

//4.

const sum = function(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

//console.log(sum(3));

// 5.

const split = function(str, c) {
  let splitStr = [];
  let last = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === c) {
      splitStr.push(str.slice(last, i));
      last = i + 1;
    } else if (i === str.length - 1) splitStr.push(str.slice(last, i + 1));
  }
  return splitStr;
};

//console.log(split('02/20/2020', '/'));

// 6.

const fib = function(n) {
  if (n === 1) return [1];
  else if (n === 2) return [1, 1];
  let fibArr = [1, 1];
  for (let i = 1; i < n - 1; i++) {
    fibArr.push(fibArr[i] + fibArr[i - 1]);
  }
  return fibArr;
};

//console.log(fib(7));

//7.

const factorial = function(n) {
  let fac = 1;
  for (let i = n; i >= 1; i--) {
    fac *= i;
  }
  return fac;
};

console.log(factorial(5));
