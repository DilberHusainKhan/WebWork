
// find number is prime or not

let jazz = process.argv
let n = parseInt(jazz[2])

let isPrime = true;

for (let div = 2; div * div <= n; div++) {
    while (n % div == 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(n + " is a prime number")
} else {
    console.log(n + " is not a prime number")
}