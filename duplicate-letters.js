/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let longestSubstring = 0;
  let currentSubstring = 0;
  // let previousLetters = {}; 
  let previousLetters = []
  let currentLetter;
  
  
  for (let i = 0; i < s.length; i++) {
      currentLetter = s[i]
      if (previousLetters.length < 1) {
          previousLetters.push(currentLetter)
          currentSubstring = 1
          if (currentSubstring > longestSubstring) {
              longestSubstring = currentSubstring;
          }
      } else {
          let duplicateCharacter = previousLetters.findIndex(x => x === currentLetter)
          if (duplicateCharacter !== -1) {
              // splice 
              let newSubstring = previousLetters.slice(duplicateCharacter, previousLetters.length + 1)
              console.log(newSubstring)
              currentSubstring = newSubstring.length
              previousLetters = newSubstring
          } else {
              previousLetters.push(currentLetter)
              currentSubstring += 1
              if (currentSubstring > longestSubstring) {
                  longestSubstring = currentSubstring;
              }
          }
      }
      
  }
  
  return(longestSubstring);
  
};