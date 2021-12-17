const tokens = require("./tokens.js");
const fs = require("fs");
const prompt = require("prompt-sync")();
const getFilePath = function () {
  const a = prompt();
  if (a.endsWith(".lfi")) {
    return a;
  } else {
    return a + ".lfi";
  }
};
function replaceIn(a, b) {
  inputString = inputString.replace(a, b);
}
const inputFileRaw = new String(fs.readFileSync(getFilePath()));
var outputJS = new String();
console.log("");
var inputString = inputFileRaw.split("\n");
const listVals = [];
for (line of inputString.split("\n")) {
  replaceIn(" )", ")");
  replaceIn(" (", "(");
  replaceIn(") ", ")");
  replaceIn("( ", "(");
  replaceIn(" ) ", ")");
  replaceIn(" ( ", "(");
  replaceIn(")", " ) ");
  replaceIn("(", " ( ");
  replaceIn(" @ )", " @) ");
  replaceIn(" @ (", " @( ");
}
var getLines = function () {
  inputString.forEach(function (a) {
    listVals.push(a.split(" "));
  });
  return listVals;
};
getLines();
for (line of listVals) {
  var ti = 0;
  var lineind = new Number(0 - 1);
  for (token of line) {
    var outputJS, ti, lineind; /*, tokenAppend*/
    lineind++;
    if (!ti) {
      if (tokens.tokenOf[token]) {
        if (tokens.tokenOf[token].includes("•")) {
          ti++;
          if (tokens.tokenOf[line[lineind + 1]]) {
            outputJS =
              outputJS +
              tokens.tokenOf[token].replace(
                "•",
                tokens.tokenOf[line[lineind + 1]]
              ) +
              " ";
          } else {
            outputJS =
              outputJS +
              tokens.tokenOf[token].replace("•", line[lineind + 1]) +
              " ";
          }
          if (tokens.tokenOf[token].includes("∞")) {
            ti++;
            if (tokens.tokenOf[line[lineind + 2]]) {
              outputJS =
                outputJS +
                tokens.tokenOf[token].replace(
                  "∞",
                  tokens.tokenOf[line[lineind + 2]]
                ) +
                " ";
            } else {
              outputJS =
                outputJS +
                tokens.tokenOf[token].replace("∞", line[lineind + 2]) +
                " ";
            }
          }
        } else {
          outputJS = outputJS + tokens.tokenOf[token] + " ";
        }
      } else {
        if (String(token).startsWith("@")) {
          outputJS = outputJS + String(token).substring(1, token.length) + " ";
        } else {
          outputJS = outputJS + String(token) + " ";
        }
      }
    } else {
      ti--;
    }
  }
  outputJS += "\n";
}

function replaceOut(a, b) {
  outputJS = outputJS.replace(a, b);
}

for (line of outputJS.split("\n")) {
  replaceOut(" )", ")");
  replaceOut(" (", "(");
  replaceOut(") ", ")");
  replaceOut("( ", "(");
  replaceOut(" ) ", ")");
  replaceOut(" ( ", "(");
}

for (item of tokens.modules) {
  replaceOut(item, tokens.moduleImports[item]);
}
console.log(outputJS);

try {
  fs.readFileSync("./out/output.js");
} catch {
  fs.mkdirSync("./out/");
}
fs.writeFileSync("./out/output.js", outputJS);
