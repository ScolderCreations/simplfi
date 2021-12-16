const method = " ";
const inputA = " ", inputB = " ";

const tokenOf = {
  "+": '+',
  "-": '-',
  ".": '.',
  "'": "'",
  '"': '""',
  "*": '*',
  "!": '!',
  "?": '?',
  "%": '%%',
  '@': '@',
  '(': '(',
  ')': ')',
  '|': '||',
  '=': '=',
  '\\': '\\',
  '[': '[',
  ']': ']',
  '&': '&&',
  '^': '^',
  "<": '<',
  ">": '>',
  ";": ";",
  '~': "~",
  "`": "`",
  ':': ':',
  '{': '{',
  '}': '}',
  '~=': '==',
  '==': '===',
  '++': '++',
  '--': '--',
  '>=': '>=',
  '<=': '=<',
  '!=': '!==',
  '#!=': '!===',
  '&&': '&',
  'define': 'function •() {',
  'print': 'console.log',
  'class': 'class • {¶}',
  'import': 'import * from •',
  'if': 'if (•) {',
  'else': 'else {',
  'elif': 'else if (•) {',
  'PI': 'Math.PI',
  'floorOf': 'Math.floor',
  'ceilOf': 'Math.ceiling',
  'String': '•.toString',
  'combineText': '"".concat',
  'toLowercase': '•.toLowerCase()',
  'toAllCaps': '•.toUpperCase()',
  'trimText': '•.splice(∞)',
  'end': '}'
}

const treplaceWith = [
  [' (', '('],
  [' )', ')'],
  ['\n', ';']
]

exports.tokenOf = tokenOf
exports.replaceWith = treplaceWith