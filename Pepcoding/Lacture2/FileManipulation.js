//Aim
// Read a file Capitlize every word, write it to another file

let minimist = require('minimist')
let args = minimist(process.argv)

let fs = require('fs')  // fs -> file System; used to read or write from or in the file
let stext = fs.readFileSync(args.source, "utf-8")


//console.log(stext)    //print text from f1.txt
//let word = stext.split(" ")
// console.log(word)
// for (let i = 0; i < word.length; i++) {
//     word[i] = word[i].toUpperCase()
// }
// let dtext = word.join(" ")
// console.log(dtext)

let dtext = stext.toUpperCase();

fs.writeFileSync(args.dest, dtext, "utf-8")

//run command
//node FileManipulation.js --source=f1.txt --dest=f2.txt