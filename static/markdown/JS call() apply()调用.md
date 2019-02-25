#### JS call() apply()调用

在特定的作用域内调用某函数函数，等于改变了该函数体this的指向


```
// 调用apply方法传入一个数组
(function callSum(a, b) {
    sum.apply(this, [a, b]);
    sum.apply(this, arguments);
})(1, 1);
// 声明一个方法sum作为调用apply和call方法的函数
function sum(a, b) {
    console.log(this) //this.window
    console.log(a + b); //2
}
//可以理解为在callSum方法，添加一个属性，值为sum方法。
// function callSum() {
//     var sum = function() {}
// }
```

---


```
// 调用apply方法传入一个数组, 和一个对象myObj
var myObj = {
    a: 'hi'
};
function testObj() {
    console.log(this) //输出myObj
    console.log(this.a) //输出hi
}
testObj.apply(myObj);
// callmyObj
// 可以理解为：在myObj添加一个属性，值为testObj方法。
// var myObj = {
//     name: 'hi',
//     testObj = function testObj() {
//         console.log(this) //输出myObj
//         console.log(this.name) //输出hi
//     }
// }
```

---

```
var myfunc = function() {
    this.name = 'hello'
};
var testFunc = function() {
    console.log(this.name)
};
// 调用apply方法传入一个数组,和一个对象myObj
(function callTestFunc() {
    testFunc.apply(new myfunc());
})();
```
