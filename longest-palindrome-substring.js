/**
 * @param {string} s
 * @return {string}
 */

 var longestPalindrome = function(s) {
  // Declare variables
  let evenPalindromes = [];
  let oddPalindromes = [];
  let longestPalindrome= s[0];
  let left, right;
  
  // check if input is longer than 1
  if (s.length === 1){
      return(s)
  }

  
  // isPalindrome helper
  const isPalindrome = (str) => {
      return (str === str.split('').reverse().join('') ? true : false)
  }
  
  // Find all basic palindromes, push to array
  for (let i = 0; i < s.length - 1; i++){
      left = i;
      right = i + 1;
      let substring;
      //EVEN PALINDROMEs
      substring = s.slice(left, right + 1);
      if (isPalindrome(substring)){
          evenPalindromes.push(i)
      }
      //ODD PALINDROMES
      if (i + 2 < s.length) {
          substring = s.slice(left, right + 2);
          if (isPalindrome(substring)){
              oddPalindromes.push(i)
          }
      }
  }
  
  console.log(evenPalindromes);
  console.log(oddPalindromes);
  
  // iterate over EVEN palindromes array, find longestPalindrome
  for (let i = 0; i < evenPalindromes.length; i++) {
      let left = evenPalindromes[i];
      let right = evenPalindromes[i] + 1
      
      while (left >= 0 && right < s.length) {
          let substr = s.slice(left, right + 1);
          // console.log(substr)

          if (isPalindrome(substr)){
              console.log("even checker " + substr)
              if (substr.length > longestPalindrome.length) {
                  longestPalindrome = substr;
              }

          }
          left -= 1;
          right += 1;
      }
      
  }
  
  // iterate over ODD palindromes array, find longestPalindrome
  for (let i = 0; i < oddPalindromes.length; i++) {
      let left = oddPalindromes[i];
      let right = left + 2
      
      while (left >= 0 && right < s.length) {
          let substr = s.slice(left, right + 1);
          // console.log(substr)

          if (isPalindrome(substr)){
              if (substr.length > longestPalindrome.length) {
                  longestPalindrome = substr;
              }

          }
          left -= 1;
          right += 1;
      }
      
  }
  
//     if (longestPalindrome.length === -1) {
//         return (s[0]);
//     }
  return(longestPalindrome)
  
};