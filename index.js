const tokens = require('./tokens.js');
const fs = require('fs');
const prompt = require('prompt-sync')();
const getFilePath = function(){const a = prompt(); if (a.endsWith(".lfi")) {return a} else {return a + ".lfi"}}
const inputFileRaw = new String(fs.readFileSync(getFilePath()));
var outputJS = new String()
console.log("")
var inputString = inputFileRaw.split('\n');
const listVals = [];
var getLines = (function(){inputString.forEach(function(a){listVals.push(a.split(' '))}); return listVals})
getLines();
for (line of listVals) {
  var ti=0;
  var lineind=new Number(0 - 1);
  for (token of line) {
    var outputJS, ti, lineind/*, tokenAppend*/
    lineind++
    if (!ti) {
    if (tokens.tokenOf[token]) {
      if (tokens.tokenOf[token].includes('•')) { 
        ti++
        if (tokens.tokenOf[line[lineind+1]]) {
          outputJS = outputJS + tokens.tokenOf[token].replace("•", tokens.tokenOf[line[lineind + 1]]) + " "
        } else {
          outputJS = outputJS + tokens.tokenOf[token].replace("•", line[lineind + 1]) + " "
        }
        if (tokens.tokenOf[token].includes('∞')) { 
        ti++
        if (tokens.tokenOf[line[lineind+2]]) {
          outputJS = outputJS + tokens.tokenOf[token].replace("∞", tokens.tokenOf[line[lineind + 2]]) + " "
        } else {
          outputJS = outputJS + tokens.tokenOf[token].replace("∞", line[lineind + 2]) + " "
        }
        }
      } else {
        outputJS = outputJS + tokens.tokenOf[token] + " "
      }
    } else {
      outputJS = outputJS + String(token) + " "
    } 
    } else {ti--}
  } outputJS+="\n"
}

function replaceOut(a,b) {
  outputJS.replace(a,b)
}

replaceOut(' )', ')')
replaceOut(' (', '(')
replaceOut(') ', ')')
replaceOut('( ', '(')

console.log(outputJS);