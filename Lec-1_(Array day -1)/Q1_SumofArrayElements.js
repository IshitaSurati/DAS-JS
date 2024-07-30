//Write a function to calculate the sum of all elements in an array.
//Write a function to calculate the sum of all elements in an array.
const Array=(arr)=> {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  console.log(Array([1, 2, 3, 4, 5])); 
  console.log(Array([10, 20, 30]));    
  