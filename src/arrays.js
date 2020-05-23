/* eslint-disable no-unused-vars */


// one item
const a1 = ['one'];
const a2 = [
  'one'  
]; 

// two items
const a3 = ['one', 'two'];
const a4 = [
  'one',
  'two'
];

// three items
const a5 = ['one', 'two', 'three'];
const a6 = [
  'one',
  'two',
  'three'
];



// Destructuring 
const [single1]  = a1; 
const single2 = a1[0]; 


const [one1, two1, three1]  = a3; 
const [
  one2,
  two2, 
  three2 
] = a3;

// Spacing

const spaced = ['one', 'two'];
const notSpaced = [ 'one','two' ]; 