const tokenOf = {
  '|': '||',
  '\\': '\\',
  '[': '[',
  ']': ']',
  '&': '&&',
  '}': '}',
  '~=': '==',
  '==': '===',
  '++': '++',
  '--': '--',
  '>=': '>=',
  '<=': '<=',
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
  'ceilOf': 'Math.ceil',
  'tostr': '•.toString()',
  'str': 'String',
  'combineText': '"".concat',
  'toLowercase': '•.toLowerCase()',
  'toAllCaps': '•.toUpperCase()',
  'trimText': '•.splice(∞)',
  'end': '}',
  'randomDecimal': 'Math.random',
  'list': 'Array',
  'obj': 'Object',
  'set': 'new Set',
  '!var': 'const',
  'ask': 'prompt(•)',
  'mod': '%',
  '#': '//'
}
const moduleImports = {
  "// .ask": "const prompt = require('prompt-sync')();",
  "// .file": "const fs = require('fs');"
}
const modules = [
  "// .ask",
  "// .file"
]
exports.tokenOf = tokenOf
exports.modules = modules
exports.moduleImports = moduleImports