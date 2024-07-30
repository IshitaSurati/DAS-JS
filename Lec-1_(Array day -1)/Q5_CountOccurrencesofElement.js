//Write a function to count the occurrences of a specific element in an array.
const countOccurrences=(arr, target)=> {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        count++;
      }
    }
    return count;
  }

  console.log(countOccurrences([1, 2, 2, 3, 2, 4, 5], 2)); 
  console.log(countOccurrences([10, 20, 20, 10, 10], 10));