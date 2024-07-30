//Write a function to find the largest element in an array.
const LargestArray = (arr) => {
    let num = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            num = arr[i]
        }
    }
    return num;
}
console.log(LargestArray([3, 7, 1, 9, 2])); 
console.log(LargestArray([10, 20, 5])); 