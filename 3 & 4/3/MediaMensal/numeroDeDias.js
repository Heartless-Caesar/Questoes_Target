const mediaMensal = (array) => {
  let numDeDias = 0;

  let sum = array.reduce(function (a, b) {
    return a + b;
  });

  sum = sum / 30;

  for (let i = 0; i < array.length; i++) {
    if (sum < array[i]) {
      numDeDias++;
    }
  }

  return numDeDias;
};

module.exports = { mediaMensal };
