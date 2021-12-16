/* 1) write program that maintains a count of both children and adults 
   2) function enter should count children and adults and return true, 
   if no .of children ia more than adults should return false
   3) function leave 
*/

// do not change these lines

function reset() {
  adults = 0;
  children = 0;
}

let adults = 0;
let children = 0;
;

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
function enter(numChildren, numAdults) {
  if (numChildren > numAdults) {
    return false
  }
  else {
    adults = adults + numAdults
    //console.log(adults)
    children = children + numChildren
    return true
  }
}

function leave(numChildren, numAdults) {
  if (numChildren < numAdults) {
   return true
  } 
  else {
    adults = adults + numAdults
    //console.log(adults)
    children = children + numChildren
    return true
  }
}


function occupancy(numChildren, numAdults) {
  return {adults: adults, children: children}
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset,
};
