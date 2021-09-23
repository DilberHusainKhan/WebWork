// Loop in JavaScript

let jazz = process.argv
let n = parseInt(jazz[2])
/* 
// print 1 to n
for (let i = 1; i <= n; i++) {
    console.log(i);
}*/

/*
// print i to n even odd
for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is Odd")
    }
}

*/

//Print Table 

for (let i = 1; i <= 10; i++) {
    let j = i * n;
    console.log(n + " X " + i + " = " + j)
}