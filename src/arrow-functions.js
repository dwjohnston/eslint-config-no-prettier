/* eslint-disable no-unused-vars */


// Arrow functions - Creating

// Curly bracket around body
const af1 = () => 'hello'; 
const af2 = () => {
  return 'hello'; 
}; 

// Round brackets around single param
const af3 = value => value; 
const af4 = (value) => value; 


// Two params
const af5 = (foo, bar) => 'hello'; 
const af6 = (
  foo, 
  bar,
) => 'hello'; 

// Four params
const af7 = (foo, bar, biz, bash) => 'hello'; 
const af8 = (
  foo, 
  bar, 
  biz, 
  bash
) => 'hello'; 

const af8b = (foo,
  bar,
  biz, 
  bash)  => 'hello';

// Spacing

const af9 = ()=>undefined; 
const af10 = () => undefined; 


// Arrow functions - Creating

// One arg
af3('hello');

// Two args
af5('hello', 'world'); 
af5(
  'hello',
  'world'
);

// Four args
af7('one', 'two', 'three', 'four');
af7(
  'one',
  'two',
  'three',
  'four'
);
af7(
  'one', 'two',
  'three',
  'four'
);
af7(
  'one', 'two',  'three',  'four'
);

af7('one', 
  'two', 
  'three', 
  'four'); 





