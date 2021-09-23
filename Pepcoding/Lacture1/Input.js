
// code to take input


// process.argv is predefine function in node that is used to take input in the  String array.

let clvar = process.argv;
// console.log(clvar)  //Output of clvar


// Print only value
// if we pass a number in the input then process.argv treat that number as String. 
console.log(clvar[2]);

let j = clvar[2] + 20;
console.log(j)  // output will be 10020

let n = parseInt(clvar[2], 10)   //convert String to number    ParseInt(value in string, Base) or parseInt(String value)
j = n + 20
n = n + 20

console.log(j);         // output will be 120.

console.log(n);  // output will be 120.
console.log(typeof n)
