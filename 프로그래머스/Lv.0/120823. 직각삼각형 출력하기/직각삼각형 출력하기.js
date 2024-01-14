const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let t = Array.from({length:input[0]}).fill("*").map((x, i) => x.repeat(i+1)).join("\n");
    
    console.log(t);
});