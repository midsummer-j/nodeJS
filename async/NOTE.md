### Node.js 的非阻塞 I/O
* I/O 即 Input/Output，一个系统的输入和输出。
* 阻塞 I/O 和非阻塞 I/O 的区别就在于系统接收输入再到输出期间，能不能接收其
他输入。


### 理解非阻塞 I/O 的要点在于
* 确定一个进行 Input/Output 的系统。
* 思考在 I/O 过程中，能不能进行其他 I/O。

### Node.js 异步编程 - callback
* 回调函数格式规范
  * error-first callback
  * node-style callback
* 第一个参数是 error，后面的参数才是结果。