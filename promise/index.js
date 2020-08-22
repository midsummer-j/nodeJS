(function () {
    Promise.all([
        interview('remanshop'),
        interview('landa')
    ]).then(()=>{
        console.log("全部成功");
    }).catch((err)=>{
        //第一个失败
        console.log("失败",err.name,err);
    })


    // var promise = interview(1)
    //     .then(()=>{
    //         return interview(2);
    //     }).then(()=>{
    //         return interview(3);
    //     }).then(()=>{
    //         console.log('恭喜面试通过！！！');
    //     }).catch((err)=>{
    //         console.log("失败！！！",err.round);
    //     });

    // var promise2 = promise
    //     .then(res => {
    //         // console.log('恭喜面试通过！！！', res);
    //         // throw new Error('拒绝入职！！')
    //         // return "接受offer！！！";
    //         return new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 resolve('接受offer！！！')
    //             }, 300);
    //         });
    //     }).catch(err => {
    //         // console.log('很抱歉！！！', err);
    //         // throw new Error('失败！！！')
    //         return "失败！！！";

    //     })

    function interview(name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var num = Math.random();
                if (num < 0.4) {
                    resolve(num)
                } else {
                    var error = new Error('失败')
                    error.name = name;
                    reject(error)
                }
            }, 500)
        });
    }
})()