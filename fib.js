const iterativeFib = (n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      result.push(0);
    } else if (i == 1) {
      result.push(1);
    } else result.push(result[i - 1] + result[i - 2]);
  }
  return result;
};

console.log(iterativeFib(10));

const recursiveFib = (n) => {
  if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  } else
    return [
      ...recursiveFib(n - 1),
      recursiveFib(n - 1)[n - 2] + recursiveFib(n - 1)[n - 3],
    ];
};

console.log(recursivFib(10));
