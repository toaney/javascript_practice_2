/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let longestSubstring = 0;
  let currentSubstring = 0;
  let previousLetters = []
  let currentLetter;
  
  
  for (let i = 0; i < s.length; i++) {
      currentLetter = s[i]
      
      // NO PREVIOUS LETTERS
      if (previousLetters.length < 1) {
          previousLetters.push(currentLetter)
          currentSubstring = 1
          if (currentSubstring > longestSubstring) {
              longestSubstring = currentSubstring;
          }
      // PREVIOUS LETTERS DETECTED
      } else {
          let duplicateCharacter = previousLetters.findIndex(x => x === currentLetter)
          // DUPLICATE LOGIC
          if (duplicateCharacter !== -1) {
              previousLetters.push(currentLetter)
              let newSubstring = previousLetters.slice(duplicateCharacter + 1)
              currentSubstring = newSubstring.length
              previousLetters = newSubstring
          // NON-DUPLICATE LOGIC
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