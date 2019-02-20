// just a testing library
var expect = require('chai').expect

// input we'll be using, and expected output
var input = '"case_clamshell,pilot_in,wrap_in"'
var output = 'case_clamshell+pilot_in+wrap_in'

// rewrite function that performs the transformation
function rewrite (text) {
  
  // regex just looks for text surrounded by quotes
  var match = text.match(/^"(.+)"$/)
  
  // if we got a match, and the inner parens matched
  if (match && match[1]) {
    
    // replace all the commas with pluses
    return match[1].replace(/,/g, '+')
  }
  
  // if we didn't get a match just return what we started with
  return text
}

// test our function
expect(rewrite(input)).equals(output)

// if expect didn't blow up then we're ok :-)
console.log('ok')
