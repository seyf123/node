const process = require("process");

var arg = process.argv;
var sum = 0;
for (let index = 2; index < arg.length; index++) {
  const element = parseInt(arg[index]);
  sum = sum + element;
}
console.log(`${sum}`);
