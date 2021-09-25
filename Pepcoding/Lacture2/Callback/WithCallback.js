//t1 = read from file
//is prime
//t2 and t1 execute paraller

function IsPrime(x) {
    let isPrime = true;
    let n;
    for (n = 2; n * n <= x; n++) {
        if (x % n == 0) {
            isPrime = false
            break;
        }
    }
    return isPrime
}

let minimist = require("minimist")
let fs = require("fs");
let args = minimist(process.argv)

//Task1
let t1 = Date.now()
console.log("Task1 Starting at " + t1 % 100000)

fs.readFile(args.source, function (data) {
    let t2 = Date.now()
    console.log("Task1 End at " + t2 % 100000)
    console.log("total time require by Task1 " + (t2 - t1))
})

//Task2
let t3 = Date.now()
console.log("Task2 Starting at " + t3 % 10000)
let arr = []
for (let i = 2; i < args.n; i++) {
    let isPrime = IsPrime(i)
    if (isPrime) {
        arr.push(i)
    }
}
let t4 = Date.now()
console.log("Task2 Finish at " + t4 % 10000)
console.log(" total time  require for Task2 " + (t4 - t3))
console.log(" total time  require for Task1 and Task2 " + (t4 - t1))


