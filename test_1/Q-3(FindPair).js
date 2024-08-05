// Option 1: Find the Pair with the Nearest Sum to a Target
const findPairNearestSum = (arr, target) => {
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    let closestPair = [];
    let closestDiff = Infinity;

    while (left < right) {
        let currentSum = arr[left] + arr[right];
        let currentDiff = Math.abs(target - currentSum);

        if (currentDiff < closestDiff) {
            closestDiff = currentDiff;
            closestPair = [arr[left], arr[right]];
        }

        if (currentSum < target) {
            left++;
        } else if (currentSum > target) {
            right--;
        } else {
            // If currentSum equals the target, we've found the closest pair
            break;
        }
    }

    return closestPair;
};

let Input1 = [1, 3, 4, 7, 10];
let target1 = 15;
console.log(findPairNearestSum(Input1, target1));
// Output: [4, 10]

