/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let converted;
  if ( x < 0 ) {
      let num = Math.abs(x).toString().split('').reverse().join('')
      converted = num * -1
      
  } else {
      converted = x.toString().split('').reverse().join('')
  }
    
  if (converted < -(2**31) || converted > (2**31 - 1)){
      return 0
  } else {
      return converted
  }
};