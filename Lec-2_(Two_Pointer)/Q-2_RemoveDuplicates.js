//Remove Duplicates from Sorted Array
// Example:
// Input: [1, 1, 2]
// Output: 2, array: [1, 2]



const removeDuplicates = (arr) => {
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }

  return i + 1;
};

let Arr = [1, 1, 2];
let newLength = removeDuplicates(Arr);

console.log(newLength); 
console.log(Arr.slice(0, newLength)); 
