* 为什么使用commonJS模块规范？
  * 脚本变多需要手动管理加载顺序；
  * 不同脚本之间的逻辑调用，需要全局变量的方式；
  * 没有HTML？。

* 什么是commonJS模块规范？
  * JavaScript社区发起的，在Node.js上应用并推广；
  * 后续影响到了浏览器端JavaScript。 

* EventEmitter （process继承了EventEmitter）
  * 观察者模式
    * addEventListener
    * removeEventListener