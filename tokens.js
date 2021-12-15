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
  'define': 'function •() {¶}',
  'print': 'console.log',
  'class': 'class • {¶}',
  'import': 'import * from •',
  'if': 'if (•) {¶}',
  'else': 'else {•}',
  'elif': 'else if (•) {¶}',
  'PI': 'Math.PI',
  'floorOf': 'Math.floor',
  'ceilOf': 'Math.ceiling',
  'toString': '•.toString',
  'combineText': '"".concat',
  'toLowercase': '•.toLowerCase()',
  'toAllCaps': '•.toUpperCase()',
  'trimText': '•.splice(∞)'
}

exports.tokenOf = tokenOf