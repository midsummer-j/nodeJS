//  模拟事件循环
const eventLoop = {
    queue: [], //队列
    timeoutqueue:[],
    fsqueue:[],

    loop() {
        while (this.queue.length) {
            var callback = this.queue.shift();
            callback();
        }
        // this.fsqueue.forEach(callback=>{
        //     if(done){
        //         callback()
        //     }
        // })

        setTimeout(this.loop.bind(this), 50)
    },

    add(callback) {
        this.queue.push(callback)
    }
}

eventLoop.loop();

setTimeout(() => {
    eventLoop.add('fsqueue',function () {
        console.log(1);
    })
}, 500)
setTimeout(() => {
    eventLoop.add(function () {
        console.log(2);
    })
}, 800)