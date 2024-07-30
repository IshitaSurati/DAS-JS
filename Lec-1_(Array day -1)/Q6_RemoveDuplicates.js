// Write a function to remove duplicate elements from an array.

const removeDuplicates=(arr)=> {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }
  

  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
  