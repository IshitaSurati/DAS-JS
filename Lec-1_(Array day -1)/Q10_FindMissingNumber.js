// Write a function to find the missing number in an array of integers from 1 to n.

const findMissingNumber=(arr, n)=> {
    const totalSum = (n * (n + 1)) / 2;
    const arraySum = arr.reduce((sum, num) => sum + num, 0);
    return totalSum - arraySum;
  }
  

  console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); 
  