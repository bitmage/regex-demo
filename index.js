var expect = require('chai').expect

var input = '"case_clamshell,pilot_in,wrap_in"'
var output = 'case_clamshell+pilot_in+wrap_in'

function rewrite (text) {
  var match = text.match(/^"(.+)"$/)
  if (match && match[1]) {
    return match[1].replace(/,/g, '+')
  }
  return text
}

expect(rewrite(input)).equals(output)
console.log('ok')
