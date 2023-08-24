// Code your solutions in this file
function writeCards(stringNames, eventName) {
  let array2 = [ ];
  for (let i = 0; i < stringNames.length; i++) {
    array2.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`)
    debugger;
  }
  return(array2);
  
}

writeCards(["John", "Joe", "Jim"], "Anniversary");

function countDown(n){
  let countDown = n 
  while (n >= 0){
    console.log(n--);
  }
}

