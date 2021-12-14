const lexer = require('./lexer.js');
const fs = require('fs');
const prompt = require('prompt-sync')();
const inputFileRaw = new String(fs.readFileSync(prompt()));

var inputString = inputFileRaw.split('\n');
const listVals = [];
var getLines = (function(){inputString.forEach(function(a){listVals.push(a.split(' '))}); return listVals})
getLines();
var tokentype = new Array();
for (line in listVals) { // targets one line at a time
  var tokentype;
  for (token in line) {
    var tokentype;
    if (lexer.tokenOf[token]) {
      tokentype.push('{token: lexer.tokenOf[token]}');
    } 
    else if (!isNaN(new Number(token))) 
    {tokentype.push({token: "NUMBER"})}
    else if ((token.startsWith("'") || (token.startsWith('"')) && (token.endsWith('"') || token.endsWith("'"))))
    {tokentype.push({token: "STRING"})}
    else {
      tokentype.push({token: "STATEMENT"})
    }
  }
}