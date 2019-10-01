
function countZeros(n) {
  let res = 0;

  while (n >= 5) {
    n = Math.floor(n / 5);
    res += n;
  }

  return res;
}

module.exports = function zeros(expression) {
  const arr = expression.split('*');
  let result = 0;
  let onlyOdd = false;

  arr.forEach(element => {
    if(element.match(/!{2}/)) {
      const n = element.split('!!')[0] - 0;
      let even = n < 50 ? Math.floor(n / 10) : Math.floor(n / 10) + Math.floor(n / 50);
      
      if(n % 2 == 1) {
        result += countZeros(n) - even;
      } else {
        onlyOdd = true;
        result += even;
      }
    } else {
      onlyOdd = true;
      const n = element.split('!')[0] - 0;
      result += countZeros(n);
    }
  });

  return onlyOdd ? result : 0;
}
