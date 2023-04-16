const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const firstHalf = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const secondHalf = mergeSort(arr.slice(Math.floor(arr.length / 2)));

  return mergeSortedArrs(firstHalf, secondHalf);
};

const mergeSortedArrs = (arr1, arr2, result = []) => {
  if (!arr1.length && !arr2.length) return result;
  else if (!arr1.length) result.push(arr2.shift());
  else if (!arr2.length) result.push(arr1.shift());
  else
    arr1[0] >= arr2[0] ? result.push(arr2.shift()) : result.push(arr1.shift());

  return mergeSortedArrs(arr1, arr2, result);
};

console.log(
  mergeSort([
    1, 0, 5, 6, 3, 7, 6, 1, 3, 3, 7, 0, 0, 10, 4, 0, 2, 3, 9, 3, 10, 1, 9, 6, 2,
    5, 3, 5, 3, 0, 8, 2, 7, 8, 7, 3, 2, 8, 9, 7, 8, 4, 10, 1, 4, 0, 10, 4, 3, 8,
    10, 9, 10, 4, 6, 8, 6, 9, 1, 9, 5, 4, 3, 4, 2, 2, 7, 8, 6, 9, 4, 5, 9, 7, 6,
    0, 3, 6, 3, 2, 10, 7, 8, 6, 9, 4, 6, 6, 2, 7, 8, 8, 4, 1, 2, 8, 3, 7, 9, 1,
  ])
);
