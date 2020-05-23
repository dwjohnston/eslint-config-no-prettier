module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module'
  },
  'rules': {
    // Arrow functions
    'arrow-body-style': ['off'], 
    'arrow-parens': ['warn', 'always'],
    'arrow-spacing' : ['warn'],

    // Functions
    //function-call-argument-newline unfortuantely doesn't have a 'minItems' like the array-element-newline 
    'function-call-argument-newline': ['warn', 'consistent'],
    'function-paren-newline': ['warn', {'minItems': 3}],


    //Arrays 
    'array-bracket-newline' : ['warn', {       'minItems': 3    }],
    'array-bracket-spacing' : ['warn', 'never'],
    'array-element-newline' : ['warn', {       'minItems': 3    }],

    'indent': ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['warn', 'single'],
    'semi': ['error', 'always']
  }
};
