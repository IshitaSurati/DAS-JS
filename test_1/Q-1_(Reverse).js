// Question 1: Reverse an Array Without Using Built-in Functions
const ReverseArray = (array) => {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }
    return array;
};

let Input1 = [1, 2, 3, 4, 5];
console.log(ReverseArray(Input1));
// Output: [5, 4, 3, 2, 1]

let Input2 = [10, 20, 30, 40];
console.log(ReverseArray(Input2));
// Output: [40, 30, 20, 10]

let Input3 = [7, 8, 9];
console.log(ReverseArray(Input3));
// Output: [9, 8, 7]
