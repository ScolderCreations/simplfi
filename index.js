const lexer = require('./tokens.js');
const fs = require('fs');
const prompt = require('prompt-sync')();
const inputFileRaw = new String(fs.readFileSync(prompt()));

var inputString = inputFileRaw.split('\n');
const listVals = [];
var getLines = (function(){inputString.forEach(function(a){listVals.push(a.split(' '))}); return listVals})
getLines();