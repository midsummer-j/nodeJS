// try {
    interview(function(res){
        if(res instanceof Error){
            return console.log('去另一家继续！！！');;
        }
        console.log("我笑了！！！");
    })
// } catch (e) {
//     console.log('去另一家继续！！！',e);
// }

function interview(callback){
    setTimeout(()=>{
        if(Math.random() < 0.8){
            callback(null,'面试通过')
        }else{
            callback(new Error('失败！！！'))
        }
    },500)
}