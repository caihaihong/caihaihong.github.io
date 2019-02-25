#### Js 数据类型

* 5种基本数据类型：Undefined、Null、Boolean、String、Number。基本数据类型，是存储在栈（Stack）内存中的，按值访问，读写的是实际保存的值。

1种引用类型：Object。引用类型实际是一个指针，也存储在栈内存中，指向存储在堆内存中的对象。按访问引用，读写需要先从栈中找到指针，根据近指针找到堆(Heap)内存的对象进行修改。

##### 函数参数的传递

JS中所有函数的参数都是按值传递：

```
function setName(obj){
  obj.name = "Nicholas";//person指向的对象已经被修改
  obj = new Object();//将函数局部变量obj指向另一个新的变量
  obj.name = "Greg";
}
var person = new Object();
setName(person);//传递栈中的指针值
console.log(person.name);//Nicholas
```

