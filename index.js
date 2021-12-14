const lexer = require('./lexer.js');
const fs = require('fs');
const prompt = require('prompt-sync')();
const inputFileRaw = new String(fs.readFileSync(prompt()));

var inputString = inputFileRaw.split('\n')

var inputString = new Object(inputString.forEach(function(a){return a.split('\s')}))