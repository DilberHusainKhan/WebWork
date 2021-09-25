//t1 = Read from file (Disk)
//t2=   find prime number between( CPU )
function IsPrime(x) {
    let isPrime = true;

    for (let n = 2; n <= x; n++) {
        if (x % n == 0) {
            isPrime = false
            break;
        }
    }
    return n
}


let minimist = require("minimist")
let fs = require("fs");
const { Console } = require("console");
let args = minimist(process.argv)

//task 1
let t1 = Date.now()
Console.log("Task1 Starting at " + t1);

let data = fs.readFile(args.source);
let t2 = Date.now()
Console.log("Task1 Finshing time is " + t2)
Console.log("Time Required is" + t2 - t1)

//Task2
let t3 = Date.now()
Console.log("Task2 Starting Time is" + t3)
let arr = []
for (let i = 2; i < args.n; i++) {
    let isPrime = IsPrime(i);
    if (isPrime) {
        arr.push(i);
    }
}
console.log(arr)
let t4 = Date.now()
console.log("Task2 Finish at " + t4)
console.log("Total time require by Tasks 2 is" + t4 - t3)
console.log("Total time require by both task is" + t4 - t1)
