const fs = require('fs');

// 싱크 방식
console.log("1");
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);


// 어싱크 방식

console.log("2");
fs.readFile('data.txt ', {encoding:'utf8'}, (err,data)=>{
  console.log("3");
  console.log(data);
})
console.log("4");
