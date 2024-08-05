//Question 1: Reverse an Array Without Using Built-in Functions

const ReverseArray=(array)=>{

    let i=0;
    let j=length-1

    while(i>j){
        let temp=array[i]
        array[i]=array[j]
        array[j]=temp
        i++
        j--
    }
    return array
}


let  Input1=[1, 2, 3, 4, 5]
console.log(ReverseArray(Input1));
// Output: [5, 4, 3, 2, 1]

let Input2=[10, 20, 30, 40]
console.log(ReverseArray(Input2));
// Output: [40, 30, 20, 10]

let Input3= [7, 8, 9]
console.log(ReverseArray(Input3));
// let Output: [9, 8, 7]