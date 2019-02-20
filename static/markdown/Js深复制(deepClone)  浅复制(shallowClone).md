#### Js深复制(deepClone)  浅复制(shallowClone)
JavaScript存储对象都是存地址的，所以浅拷贝会导致 obj1 和obj2 指向同一块内存地址。改变了其中一方的内容，都是在原来的内存上做修改会导致拷贝对象和源对象都发生改变，而深拷贝是开辟一块新的内存地址，将原对象的各个属性逐个复制进去。对拷贝对象和源对象各自的操作互不影响。


##### 浅复制

```
function shallowClone(OriginalObj){
var NewObj = {}
for(var i in OriginalObj){
  NewObj[i] = OriginalObj[i]
 }
 return NewObj;
}
var x = {
 a:1,
 b:{f:{g:1}}
}
var myobj = shallowClone(x);
console.log(myobj.a===x.a);//true
```

```
var x = {
  a: 1,
  b: { f: { g: 1 } },
  c: [ 1, 2, 3 ]
};
var y = Object.assign({}, x);
console.log(y.b.f === x.b.f);//true
```


##### 深复制

* Array的slice和concat方法（不是真正的深拷贝）

```
var array = [1,2,3]; 
var array_shallow = array; 
var array_concat = array.concat();
var array_slice = array.slice(0); 
    array_concat[2]=5;
console.log(array_concat[2]);//5 好像深拷贝
console.log(array_slice[2]);//3 好像深拷贝
```

```
var array = [1,2,3,{a:2}]; 
var array_shallow = array; 
var array_concat = array.concat();
var array_slice = array.slice(0); 
    array_concat[3].a=5;
console.log(array_concat[3].a);//5
console.log(array_slice[3].a);//5 说明对象里面的对象还是只拷贝引用指针
```

* 使用JSON.stringify()和JSON.parse();JSON.stringify 将js对象序列化（JSON字符串），再使用JSON.parse来反序列化(还原)js对象；

存在问题：
* 对于正则表达式类型Reg、函数类型function等无法进行深拷贝(而且会直接丢失相应的值)。
* 抛弃对象原来的constructor。也就是深拷贝之后，不管这个对象原来的构造函数是什么，在深拷贝之后都会变成Object。同时如果对象中存在循环引用的情况也无法正确处理。
```
var deepClone = function (obj) {
    var _tmp,result;
    _tmp = JSON.stringify(obj);
    result = JSON.parse(_tmp);
    return result;
}
var obj1 = {family:{brother:"wangzhipeng",father:"wanglicai",mother:"sunaiyun"},name:"gino",sex:"male",age:"27"};
var obj2 = deepClone(obj1);
obj1.family.brother = "close";
console.log(obj1); 
console.log(obj2);
```

##### 封装deep clone

```
var obj = []
Object.prototype.toString.call(obj)
"[object Array]"
```

```
<script>
    //作用域块 闭包  递归的方式去赋值
    (function($) {
        'use strict';

        var types = 'Array Object Array Date RegExp Function Boolean Number Null Undefined'.split(' ');

        function type() {
            console.log(Object.prototype.toString.call(this))
            return Object.prototype.toString.call(this).slice(8, -1);  
            //[object Function] [object Array] [object Array]...
        }

        for (var i = types.length; i--;) {
            $['is' + types[i]] = (function(self) {
                console.log(self) //分别是Array Object String Date RegExp Function Boolean Number Null Undefined
                return function(elem) {
                    return type.call(elem) === self;
                };
            })(types[i]); //这里是闭包
        }
        console.log($);
        /*
        $:{
           isArray: ƒ (elem)
           isBoolean: ƒ (elem)
           isDate: ƒ (elem)
           isFunction: ƒ (elem)
           isNull: ƒ (elem)
           isNumber: ƒ (elem)
           isObject: ƒ (elem)
           isRegExp: ƒ (elem)
           isString: ƒ (elem)
           isUndefined: ƒ (elem) 
        }
        */
        return $;
    })(window.$ || (window.$ = {})); //类型判断

    function copy(obj, deep) {
        if ($.isFunction(obj)) {
            // 判断是否为函数
            return new Function("return " + obj.toString())();
        } else if (obj === null || (typeof obj !== "object")) {
            //判断是否为空对象
            return obj;
        } else {
            var name;
            var target = $.isArray(obj) ? [] : {}; //判断进行复制的对象是数组还是对象
            var value;
            for (name in obj) {
                value = obj[name];
                if (value === obj) {
                    continue;
                }
                if (deep) {
                    if ($.isArray(value) || $.isObject(value)) {
                        target[name] = copy(value, deep);
                    } else if ($.isFunction(value)) {
                        target[name] = new Function("return " + value.toString())();
                    } else {
                        target[name] = value;
                    }
                } else {
                    target[name] = value;
                }
            }
            return target;
        }　
    }

    function Person() {
        this.a = 2;
    }
    var p = Person;
    var p4 = copy(p, true)
    var p1 = new Person();
    var p2 = p1;
    var p3 = copy(p1, true)
    p1.a = 6;
    console.log(p1.a) //6
    console.log(p1.a) //6
    console.log(p3.a) //2
</script>
```
