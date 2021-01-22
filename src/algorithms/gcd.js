const gcd = (x, y) => {
  if (y == 0) return x;
  let remainder = x % y;
  return gcd(y, remainder);
};

const lcm = (x, y) => {
  return (x * y) / gcd(x, y);
};

// console.log(lcm(84, 8));
// console.log(new Set([1, 2, 3, 3, 4, 8, 1, 5, 6, 6]));

function extraLongFactorials(n) {
  let numArr = [];
  let numString = n.toString();
  for (let i = numString.length - 1; i >= 0; i--) {
    let num = numString.charAt(i);
    numArr.push(parseInt(num, 10));
  }

  for (let i = 1; i < n; i++) {
    numArr = multiply(numArr, i);
  }

  let output = '';
  numArr.reverse().forEach((n) => {
    output += n.toString();
  });

  console.log(output);
}

function multiply(arr, n) {
  let carry = 0;

  arr.forEach((number, i) => {
    let ans = number * n + carry;
    carry = Math.floor(ans / 10);
    let newVal = ans % 10;
    arr[i] = newVal;
  });

  while (carry) {
    arr.push(carry % 10);
    carry = Math.floor(carry / 10);
  }
  return arr;
}

// console.log(multiply([2, 3, 4], 4));
