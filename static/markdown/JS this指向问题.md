#### JS this指向问题

重要的知识点：在函数中this取何值，是在函数真正被调用执行的时候确定的，函数定义的时候确定不了。因为this的取值是执行上下文环境的一部分，每次调用函数，都会产生一个新的执行上下文环境。

##### 全局 & 调用普通函数

在全局环境下，this永远是window
##### 构造函数
构造函数里面，当new一个对象时候，this指向当前的对象。
当直接执行函数时候，this指向window对象

```
var Fun =function(){
console.log(this)
/*
Fun:{
    __proto__: Object
}
*/
/*
Window:{
    __proto__: Object
}
*/
}
Fun.prototype.sayHi=function(){
 console.log(this);
/*
Fun:{
    __proto__: Object
}
*/
}
var fun = new Fun();
fun.sayHi();
Fun();
```

##### 函数作为对象的一个属性
当函数作为对象的一个属性被调用时候，函数中的this指向该对象。

```
var obj = {
f1:function(){
console.log(this)
/*{f1: ƒ}*/
/*window:{}对象*/
}}
obj.f1();
var f2 = obj.f1;
f2();
```

##### 函数用call或apply
当一个函数被call和apply调用时，this的值就取传入的对象的值。

```
var obj = {
    a:4
};
var fun = function(){
console.log(this);
/*
{a: 4}
*/
}
fun.call(obj);
```

##### bind: fn.bind(target)(1,2)