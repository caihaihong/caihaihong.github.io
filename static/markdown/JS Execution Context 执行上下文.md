#### JS Execution Context 执行上下文
执行上下文是一个比喻的词，用于描述Javascript代码运行的环境。
##### 相关概念：
* Js引擎(JS Engine)
* 全局存储器(Global Memory)：全局作用域或全局变量环境
* 调用栈（call stack)
* 全局上下文(Global Context)
* 局部上下文(Local Execution Context)

##### 主流Javascript引擎
* Google V8：V8是Google开源的Javascript引擎，在Google Chrome和Nodejs中使用
* SpiderMonkey：SpiderMonkey是Mozilla的JavaScript引擎，用于Firefox


##### 调用栈
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/js/7.png?raw=true)   

* 调用栈是一个数据结构：堆栈。
* 调用栈有两种方法：运行函数push进栈和函数执行完毕pop出栈。
* 每个函数调用都被push到调用栈中。push的第一件事是main()（或global()），它是Javascript程序执行的主要线程。

##### 局部上下文
在全局上下文执行某个函数，会在全局作用域（全局存储器）声明一个变量var res，初始值为undefined等待函数的返回保存局部变量，同时也会生成一个局部上下文。

##### 执行规则：
* JavaScript引擎创建执行上下文、全局存储器和调用栈，变量提升，实际上变量和函数声明在代码里的位置是不会动的，而是在编译阶段被放入内存中。一旦调用函数，就是创建一个局部上下文
* 当函数调用完成时，这个上下文环境以及其中的数据都会被消除，再重新回到全局上下文环境。处于活动状态的执行上下文环境只有一个。

###### 特别注意：
* 变量提升，一般变量会用undefined占空，函数是会赋值的。
* 函数在定义的时候（不是调用的时候），就已经确定了函数体内部自由变量的作用域，在函数中this到底取何值，是在函数真正被调用执行的时候确定的，函数定义的时候确定不了。
```
console.log(a) //undefined
var a =2;  
console.log(fun);//ƒ (){}//输出变量的值
var fun = function(){};
```

![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/js/3.png?raw=true)  
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/js/4.png?raw=true)  
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/js/5.png?raw=true)  
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/js/6.png?raw=true)  

