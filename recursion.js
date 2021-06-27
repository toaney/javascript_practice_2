// count down
let output = [];
const countdown = (output, num) => {
  if (num >= 0) {
    // console.log(num);
    output.push(num)
    return countdown(output, num - 1);
  }
  return output
}

console.log(countdown(output, 5));



const findFactorial = (num) => {
  if (num < 0) {
    
  }
}




















// find factorial
// const findFactorial = (num, acc = 1) => {
//   if (num < 0) {
//     console.log("Connot find factorial of a negative number.")
//     return
//   }
//   console.log(acc)
//   if (num > 0) {
//     acc = acc * num
//     return findFactorial(num - 1, acc)
//   }
//   return acc
// }

// console.log(findFactorial(0))