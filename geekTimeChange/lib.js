const eventEmitter = require('events').EventEmitter;

// GeekTime 继承 eventEmitter
class GeekTime extends eventEmitter{
    constructor() {
        super();
        setInterval(()=>{
            this.emit('newLesson',{price:Math.floor(Math.random()*100)})
        },3000)
    }
}

const geekTime = new GeekTime;

module.exports = geekTime