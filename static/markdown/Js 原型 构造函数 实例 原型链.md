#### Js 原型 / 构造函数 / 实例

ECMAScript是基于原型链的，忘掉类的继承，从原型链入手。

##### 普通对象 函数对象

* JavaScrip只有一种结构：对象
* 通过new Function()创建的对象都是**函数对象**，其他都是**普通对象**。
* 每个对象都有 ```__proto__```属性，，并且该属性指向原型对象（prototype），但只有**函数对象才有 prototype 属性**


##### prototype和 _proto_ 的概念 
prototype是函数的一个属性（函数都有prototype属性）指向原型对象。 
_ proto_ 是一个对象拥有的内置属性（请注意：prototype是函数的内置属性，_ proto_ 是对象的内置属性），_ proto_ 是JS内部使用寻找原型链的属性。简单来说，在 javascript 中每个对象都会有一个 _ proto _，方法也是对象，也有这个属性。 属性，当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么他就会去 _ proto _ 里找这个属性，这个 _ proto _ 又会有自己的 _ proto _，于是就这样一直找下去，也就是我们平时所说的原型链的概念. 


![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/js/2.png?raw=true)

![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/js/9.png?raw=true)
（上图引用自其他博客以方便理解）
##### 原型链
* 属性查找机制: 当查找对象的属性时，如果实例对象自身不存在该属性，则沿着原型链往上一级查找，找到时则输出，不存在时，则继续沿着原型链往上一级查找，直至最顶级的原型对象Object.prototype，如还是没找到，则输出undefined。
* 属性修改机制: 只会修改实例对象本身的属性，如果不存在，则进行添加该属性，如果需要修改原型的属性时，则可以用: b.prototype.x = 2；但是这样会造成所有继承于该对象的实例的属性发生改变。


```
表达式：L instance R;

则运算结果是： L.__proto__.__proto__... === R.prototype ?

运算符左边最终结果是 instanceof运算时会递归查找L的原型链，即L.__proto__.__proto__.__proto__.__proto__...直到找到了或者找到顶层为止。

运算符右边只是找出了 右边操作数的prototype是什么。

所以一句话总结：instanceof检测左侧操作数的__proto__原型链上，是否存在右侧的prototype原型。
```

##### 总结:
* Function的两个指针prototype和_ proto _ 均指向 Function.protptype 
* 构造函数通过prototype属性获取原型对象。
* 原型对象通过constructor属性获取构造函数
* 对象通过```__proto__```（非标准,隐式原型）属性获取原型对象。
* 构造函数的prototype（标准，显式原型）属性指向上一级原型对象直到Object原型对象。
* Object.prototype.__proto__指向null
* 所有的对象最终都继承于Object.prototype，而所有的构造函数，包括Function（）{} Object(){}在内，又都可以看做是Function的实例
* Obj.hasOwnProperty()可以判断某个对象本身是否有某个属性，函数也是对象。