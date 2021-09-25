//t1 = Read from file (Disk)
//t2=   find prime number between( CPU )
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
const { Console } = require("console");
let args = minimist(process.argv)

//task 1
let t1 = Date.now()
console.log("Task1 Starting at " + t1 % 100000);

let data = fs.readFileSync(args.source);
let t2 = Date.now()
console.log("Task1 Finshing time is " + t2 % 100000)
console.log("Time Required is " + (t2 - t1))

//Task2
let t3 = Date.now()
console.log("Task2 Starting Time is" + t3)
let arr = []
// console.log(args.n)
for (let i = 2; i <= args.n; i++) {
    let isPrime = IsPrime(i);
    if (isPrime) {
        arr.push(i);
    }
}
// console.log(arr)

let t4 = Date.now()
console.log("Task2 Finish at " + t4)
console.log("Total time require by Tasks 2 is" + (t4 - t3))
console.log("Total time require by both task is" + (t4 - t1))
