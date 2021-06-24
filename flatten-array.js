// flatten nested arrays

let testArray = [ 1, 2, [ 3, [4, [5, 6]]]];
let testArray2 = [ 5, 6, 7, [8, 9]];
let testArray3 = [ 1, 2]


let flatten = (acc, arr) => {
  if (Array.isArray(arr)) {
    return arr.reduce(flatten, acc)
  }
  acc.push(arr);
  return acc
}

console.log(flatten([], testArray))



























// const flatten = (acc, item) => {
//   if (Array.isArray(item)){
//     return item.reduce(flatten, acc)
//   }
//   acc.push(item)
//   return acc
// }

// console.log(flatten([], testArray));
