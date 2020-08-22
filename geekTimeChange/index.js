const geekTime = require('./lib');

geekTime.addListener('newLesson',(res)=>{
    if(res.price < 80){
        console.log("maimaiamai!",res);
    }
})