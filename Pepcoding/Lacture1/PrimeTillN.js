let jazz = process.argv

let n = parseInt(jazz[2])

console.log("List of Prime Number till " + n)
for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let div = 2; div * div <= i; div++) {
        while (i % div == 0) {
            isPrime = false
            break;
        }
    }
    if (isPrime) {
        console.log(i)
    }
}