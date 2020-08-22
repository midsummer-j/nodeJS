测试EventEmitter

* EventEmitter （process继承了EventEmitter）
  * 观察者模式
    * addEventListener
    * removeEventListener
  * 调用 vs 抛事件
    * 关键在于“不知道被通知者的存在”
    * 以及“没有人听还能继续下去”