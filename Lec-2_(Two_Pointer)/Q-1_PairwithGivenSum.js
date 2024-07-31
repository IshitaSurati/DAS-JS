//Pair with Given Sum
// Example:
// Input: [1, 2, 3, 4, 5], target: 9
// Output: True (because 4 + 5 = 9)



const SumOfTwoPointer = (arr, target) => {
    let i = 0;
    let j = arr.length - 1;
    
    while (i < j) {
      const sum = arr[i] + arr[j];
      if (sum === target) {
        return true;
      } else if (sum < target) {
        i++;
      } else {
        j--;
      }
    }
    
    return false; 
  };
  
  let Arr = [1, 2, 3, 4, 5];
  let target = 9;
  
  console.log(SumOfTwoPointer(Arr, target)); 
  