//Arrays in Js

let clargs = process.argv
let n = parseInt(clargs[2])
let arr = []     //Array decleration size is not define here
for (let i = 0; i < n; i++) {
    let val = parseInt(clargs[i + 3])
    arr.push(val)   // arr[i] =val
}
console.log(arr)
console.log("length of array is " + arr.length)
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}