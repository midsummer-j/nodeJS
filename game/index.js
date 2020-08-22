var playerAct = process.argv[process.argv.length - 1];

const game  = require('./lib');

// const result = game(playerAct);
// console.log(result);
let count = 0

process.stdin.on('data',e=>{
    const playerAct = e.toString().trim();
    // console.log(playerAct);
    const result = game(playerAct);

    if(result == -1){
        count++
    }
    if(count == 3){
        console.log('你赢了三次了，再见！');
        process.exit();
    }
})