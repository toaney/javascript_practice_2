let arr1 = [ "a", "b", "c", "d", "e", "f" ];
let arr4 = [ "a", "b", "c", "d", "e", "f" ];
let arr2 = [ "g", "h", "i", "j", "k", "l" ];
let arr3 = [ 1, 2, 3, 4, 5 ];

// console.log(arr1 === arr1);

const equals = (a, b) => {
  return a.length === b.length && a.every((v,i) => v === b[i] )
}

console.log(equals( arr1, arr4 ));


// console.log(arr3.every( (item) => {
//   return item > 0;
// }))

// console.log(arr1.concat(arr2));
// console.log(arr1.reverse())
// console.log(arr1.constructor())
// console.log(arr1.copyWithin(3, 0, 3))
// let arr1Iterator = arr1.entries();

// const displayEntries = () => {
//   for (x of arr1Iterator) {
//     console.log(x)
//   }
// }
// displayEntries();

