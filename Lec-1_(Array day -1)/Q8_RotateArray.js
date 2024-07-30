
// Write a function to rotate an array by a given number of positions.

const rotateArray=(arr, positions)=>{
    const effectivePositions = positions % arr.length;
    return arr.slice(-effectivePositions).concat(arr.slice(0, -effectivePositions));
  }
  
  console.log(rotateArray([1, 2, 3, 4, 5], 2)); 
  console.log(rotateArray([10, 20, 30],1));