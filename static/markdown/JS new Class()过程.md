#### JS new Class()过程

1. 创建空对象；var obj = {};
2. 设置新对象的constructor属性为构造函数的名称，设置新对象的__proto__属性指向构造函数的prototype对象；obj.__proto__ = Class.prototype;
3. 使用新对象调用函数，函数中的this被指向新实例对象：ClassA.call(obj);　　
4. 将初始化完毕的**新对象地址**，保存到等号左边的变量中


```
function Person(){
  this.a=2;
  var hello = 6;
 
};
var p = new Person();
console.log(p);
/*
{
  a: 2  //观察Person构造函数，里面的this.a,当前的this就是obj对象。也就是obj.a =2。
}
*/
```
