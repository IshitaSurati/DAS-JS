// Reverse a String
// Example:
// Input: 'hello'
// Output: 'olleh'

const ReverseString = (str) => {
    return str.split('').reverse().join('');
  };
  
  let input = 'hello';
  let output = ReverseString(input);
  console.log(output);
  