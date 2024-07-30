//Write a function to find the smallest element in an array.
const SmallestArray=(arr)=>{
    let num=arr[0];
    for (let i = 0; i < arr.length; i++) {
       if(arr[i]<num){
        num=arr[i]
       } 
    }
    return num;
}
console.log(SmallestArray([3, 7, 1, 9, 2]));
console.log(SmallestArray([10, 20, 5]));