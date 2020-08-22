const glob = require('glob');
// 阻塞IO
// var result = null;
// console.time('glob')
// result = glob.sync(__dirname + '/**/*')
// console.timeEnd('glob');//glob: 20.729ms
// console.log(result);

// 非阻塞IO
var result = null;
console.time('glob')
glob(__dirname + '/**/*', function (err, res) {
    result = res;
    console.log('cl result');
})
console.timeEnd('glob')
console.log(1 + 1);

// glob: 4.489ms
// 2
// cl result