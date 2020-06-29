// In this exercise, we will be given an array of 2 or more numbers. 
// We will then have to find the two largest numbers in that array, and sum them together.


const sumLargestNumbers = function(data) {
  let num1 = 0;
  let num2 = 0;

  for (const num of data) {
    if (num > num1) {
      num2 = num1;
      num1 = num;
    } else if (num > num2) {
      num2 = num;
    }
  }
 
  return num1 + num2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));