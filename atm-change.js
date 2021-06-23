const atmChangeCalculator = (itemPrice, paid, denominationArray) => {
  let changeAmt = paid - itemPrice;
  let sortedDenomArray = denominationArray.sort( (a,b) => { return b - a } );
  let output = {};

  if ( changeAmt < 0 ){
    console.log(("please insert more money"))
    return
  }

  const calculateDenominations = (change, denominationIndex) => {
    denom = sortedDenomArray[denominationIndex]
    while (change >= denom) {
      change = change - denom;
      
      if (!output[denom]){
        output[denom] = 1;
      } else {
        output[denom] += 1;
      }
    }

    if (change > 0) {
      let nextDenominationIndex = denominationIndex + 1
      if ( nextDenominationIndex > sortedDenomArray.length){
        console.log("correct change cannot be given")
        return
      }
      calculateDenominations(change, nextDenominationIndex)
    } 
  }

  calculateDenominations(changeAmt, 0);
  console.log(output);

}

// example item price 86, paid 100, denomArray [ 10, 5, 1]

atmChangeCalculator( 82, 100, [ 10, 5, 1])

