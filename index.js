function scuberGreetingForFeet(ride){
  // Write your code here!
  // let ride = 2300
  let result
  if (ride <= 400) {
    result ='This one is on me!'
  } else if (ride > 2000 && ride < 2500) {
    result = 'I will gladly take your thirty bucks.'
  } else if (ride > 2500) {
    result = 'No can do.'
  }

  return result
  
}

function ternaryCheckCity(city){
  // Write your code here!

  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default: 
    return 'Bye.'
  }
}