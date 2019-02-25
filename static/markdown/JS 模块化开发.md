#### JS 模块化开发 模块模式 (Module Patterns)

##### 为什么需要模块化？

原则：高内聚低耦合，模块内相关性高，模块间关联低。

* 项目开发越来越复杂，存在的问题：
  * 命名冲突：变量，函数名重名
  * 文件依赖：js文件越来越多，引入的顺序有错。
* 模块化开发可以避免以上问题，提高开发效率，代码方便维护


##### 模块模式是好几种模式的组合

* 命名空间模式
* 依赖声明模式
* 私有和特权成员模式
* 即时函数模式


##### JS模块化开发的演变过程
原生的没有模块系统的`<script>`到基于Commonjs和AMD规范的实现到ES6 modules

###### 全局函数

```
存在的问题：
污染了全局变量，无法保证不与其他模块发生变量名冲突。
模块成员之间看不出直接关系。
function add(a , b) {
    return parseFloat(a) + parseFloat(b);
}
function substract(a ,b) {}
function multiply(a ,b) {}
function divide(a ,b) {}
```

###### 对象封装-命名空间
命名空间(namespace):可以使变量、函数名称、类名称作用在本空间内，而其他空间可以使用同样的名称。

```
存在的问题：
暴露了所有模块成员，内部状态可以被随意修改。
命名空间越来越大。
var calculator = {
  add: function(a, b) {
    return parseFloat(a) + parseFloat(b);
  },
  subtract: function(a, b) {},
  multiply: function(a, b) {},
  divide: function(a, b) {}
};
```


##### 私有公有成员分离

```
利用此种方式将函数包装成一个独立的作用域，私有空间的变量和函数不会影响到全局作用域。

以返回值的方式得到模块的公共成员，公开公有方法，隐藏私有空间内部的属性、元素，比如注册方法中可能会记录日志。

可以有选择的对外暴露自身成员。

从某种意义上来说，解决了变量命名冲突的问题。
var calculator = (function () {
    // 这里形成一个单独的私有的空间
    // 私有成员的作用：
    //   1、将一个成员私有化
    //   2、抽象公共方法（其他成员中会用到的）
    
    // 私有的转换逻辑
    function convert(input){
        return parseInt(input);
    }

    function add(a, b) {
        return convert(a) + convert(b);
    }
    function subtract(a, b) {}
    function multiply(a, b) {}
    function divide(a, b) {}
    return {
        add : add,
        subtract : subtract,
        multiply : multiply,
        divide : divide
    }
})();
```
##### 模块的扩展与维护

```

// 计算模块
//实现开闭原则：对新增开发，对修改关闭。尽量不去修改原来的文件
(function (calculator) {
    function convert(input) {
        return parseInt(input);
    }
    calculator.add = function(a, b) {
        return convert(a) + convert(b);
    }
    window.calculator = calculator;
})(window.calculator || {});

// 新增需求
(function (calculator) {
    calculator.remain = function (a , b) {
        return a % b;
    }
    window.calculator = calculator;
})(window.calculator || {}); //先判断window下是否有这个对象，没有则传入空对象，再赋值给window.calculator。
        
alert(calculator.remain(4,3));
```

##### 模块化规范
* 服务端：CommonJs规范，“运行时加载”，只有运行时才能得到对象，导致完全没办法在编译时做“静态优化”。
* 客户端(浏览器)：
   * AMD()异步模块定义,模块将被异步加载，模块加载不影响后面语句的运行。所有依赖某些模块的语句均放置在回调函数中：RequireJS
   * CMD()通用模块定义,延迟执行（运行到需加载，根据顺序执行）：SealJS
   * ES6:import { stat, exists, readFile } from 'fs';
上面代码的实质是从fs模块加载 3 个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载，

##### AMD CMD对比
CMD 推崇依赖就近，AMD 推崇依赖前置。


```
// CMD就近依赖，需要使用把模块变为字符串解析一遍才知道依赖了那些模块，
define(function(require, exports, module) {
var a = require('./a')
a.doSomething()
// 此处略去 100 行
var b = require('./b') // 依赖可以就近书写
b.doSomething()
// ... 
})

// AMD 默认推荐的是
//AMD依赖前置，js可以方便知道依赖模块是谁，立即加载
define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
a.doSomething()
// 此处略去 100 行
b.doSomething()
...
})
```

 
##### AMD规范（Asynchronous Module Definition）

###### define函数


```
define(id?, dependencies?, factory);
```
* 参数说明：

```
id：指定义中模块的名字，可选；如果没有提供该参数，模块的名字应该默认为模块加载器请求的指定脚本的名字。如果提供了该参数，模块名必须是“顶级”的和绝对的（不允许相对名字）。

依赖dependencies：是一个当前模块依赖的，已被模块定义的模块标识的数组字面量。
依赖参数是可选的，如果忽略此参数，它应该默认为["require", "exports", "module"]。然而，如果工厂方法的长度属性小于3，加载器会选择以函数的长度属性指定的参数个数调用工厂方法。

工厂方法factory，模块初始化要执行的函数或对象。如果为函数，它应该只被执行一次。如果是对象，此对象应该为模块的输出值。
```
* 模块名的格式


```
模块名用来唯一标识定义中模块，它们同样在依赖性数组中使用：

模块名是用正斜杠分割的有意义单词的字符串
单词须为驼峰形式，或者"."，".."
模块名不允许文件扩展名的形式，如“.js”
模块名可以为 "相对的" 或 "顶级的"。如果首字符为“.”或“..”则为相对的模块名
顶级的模块名从根命名空间的概念模块解析
相对的模块名从 "require" 书写和调用的模块解析
```
##### ECMAScript6 Mudule

index.html

```
<script src="./test.js" type="module"></script>
```

import test.js例子

```
// 使用import export命令的时候，需要知道所要加载的变量名或函数名，否则无法加载。
////例子一
// import { firstName, lastName, year } from './test2.js';
// console.log(firstName, lastName, year)

//// 例子二
// import { firstName, lastName, year } from './test2.js';
// console.log(firstName, lastName, year);

// // 例子三
// import { multiply } from './test2.js';
// console.log(multiply(1, 6))

// // 例子四
// import { f } from './test2.js';
// console.log(f())


// 模块指定默认输出,可以自己命名
//  例子五
// import fun from './test2.js';
// console.log(fun())

//  例子六
// import hi from './test2.js';
// console.log(hi())

// // 例子七
// import _, { each, forEach } from './test2.js';


// // 例子八
// import MyClass from './test2.js';
// let o = new MyClass();import MyClass from './test2.js';
// let o = new MyClass();

// 例子九
// export { foo, bar }
// from './test2.js';
// 可以简单理解为转发而已
// import { foo, bar } from 'my_module';
// export { foo, bar };
// console.log(foo)//foo is not defined
```

export test2.js例子


```
// 例子一
// export var firstName = 'Michael';
// export var lastName = 'Jackson';
// export var year = 1958;

// // 例子二
// var firstName = 'Michael';
// var lastName = 'Jackson';
// var year = 1958;
// export { firstName, lastName, year };

// // 例子三
// export var multiply = function(x, y) {
//     return x * y;
// };


// // 例子四
// function f() {
//     return 3;
// }
// export { f };

// 模块指定默认输出
// 例子五
// export default function() {
//     console.log('foo');
//     return 3;
// }

// // 例子六
// export default function hello() {
//     console.log('foo');
//     return 3;
// }


// // 例子七
// export default function(obj) {
//     // ···
// }

// export function each(obj, iterator, context) {
//     // ···
// }

// export { each as forEach };



// 例子八
// export default class {

// }


// 例子九
// export var foo = 5;
// export var bar = 5;
```


##### import().then()
* import('test.js')返回一个 Promise 对象,函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用。它是运行时执行。import()函数与所加载的模块没有静态连接关系。import()类似于 Node 的require方法，区别主要是前者是异步加载，后者是同步加载。
* import()加载模块成功以后，这个模块会作为一个对象，当作then方法的参数。