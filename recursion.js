// count down
let output = [];
const countdown = (output, num) => {
  if (num >= 0) {
    console.log(num);
    output.push(num)
    return countdown(output, num - 1);
  }
  return output
}

console.log(countdown(output, 5));