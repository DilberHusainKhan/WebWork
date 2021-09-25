// first run commadand  "npm install minimist"

//code
let variable = require('minimist')
let args = variable(process.argv)
//console.log(args)      //node Dependencies.js -x 4 -y 10
/* OUTPUT
{
  _: [
    'C:\\Program Files\\nodejs\\node.exe',
    'E:\\github\\Web Dev\\Pepcoding\\Lacture2\\Dependencies.js'
  ],
  x: 4,
  y: 10
}

Output
 node Dependencies.js --name="Dilber Husain Khan" --age=23
{
  _: [
    'C:\\Program Files\\nodejs\\node.exe',
    'E:\\github\\Web Dev\\Pepcoding\\Lacture2\\Dependencies.js'
  ],
  name: 'Dilber Husain Khan',
  age: 23
}

*/
if (args.age > 20) {
  console.log(" sir, " + args.name + " you are adult " + args.age)
} else {
  console.log("sorry " + args.name + " sir, you are under age")
}
// node Dependencies.js--name = "Humayun Anwar Khan" --age = 23
// sir, Humayun Anwar Khan you are adult 23

