const numberLength = process.argv.slice(2)

const timer = function(numberLength) {
  let numericalOrder = (a, b) => {
    return a - b;
  };

  let timeSorted = numberLength.sort(numericalOrder).filter(num => num > 0);

  for (let increment of timeSorted) {
    let delay = increment * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
  }
};

timer(numberLength);