### Java 继承
继承是java面向对象编程技术的一块基石，因为它允许创建分等级层次的类。

继承就是子类继承父类的特征和行为，使得子类对象（实例）具有父类的实例域和方法，或子类从父类继承方法，使得子类具有父类相同的行为。

#### 类的继承格式
在 Java 中通过 extends 关键字可以申明一个类是从另外一个类继承而来的，一般形式如下：

```
class 父类 {
}
 
class 子类 extends 父类 {
}
```
#### 为什么需要继承
开发动物类，其中动物分别为企鹅以及老鼠，要求如下：

企鹅：属性（姓名，id），方法（吃，睡，自我介绍）
老鼠：属性（姓名，id），方法（吃，睡，自我介绍）

```
* 企鹅类
public class Penguin { 
    private String name; 
    private int id; 
    public Penguin(String myName, int  myid) { 
        name = myName; 
        id = myid; 
    } 
    public void eat(){ 
        System.out.println(name+"正在吃"); 
    }
    public void sleep(){
        System.out.println(name+"正在睡");
    }
    public void introduction() { 
        System.out.println("大家好！我是"         + id + "号" + name + "."); 
    } 
}
```

```
老鼠类：
public class Mouse { 
    private String name; 
    private int id; 
    public Mouse(String myName, int  myid) { 
        name = myName; 
        id = myid; 
    } 
    public void eat(){ 
        System.out.println(name+"正在吃"); 
    }
    public void sleep(){
        System.out.println(name+"正在睡");
    }
    public void introduction() { 
        System.out.println("大家好！我是"         + id + "号" + name + "."); 
    } 
}
```

从这两段代码可以看出来，代码存在重复了，导致后果就是代码量大且臃肿，而且维护性不高(维护性主要是后期需要修改的时候，就需要修改很多的代码，容易出错)，所以要从根本上解决这两段代码的问题，就需要继承，将两段代码中相同的部分提取出来组成 一个父类：


```
公共父类：
public class Animal { 
    private String name;  
    private int id; 
    public Animal(String myName, int myid) { 
        name = myName; 
        id = myid;
    } 
    public void eat(){ 
        System.out.println(name+"正在吃"); 
    }
    public void sleep(){
        System.out.println(name+"正在睡");
    }
    public void introduction() { 
        System.out.println("大家好！我是"         + id + "号" + name + "."); 
    } 
}
```
这个Animal类就可以作为一个父类，然后企鹅类和老鼠类继承这个类之后，就具有父类当中的属性和方法，子类就不会存在重复的代码，维护性也提高，代码也更加简洁，提高代码的复用性（复用性主要是可以多次使用，不用再多次写同样的代码） 继承之后的代码：

```
企鹅类：
public class Penguin extends Animal { 
    public Penguin(String myName, int myid) { 
        super(myName, myid); 
    } 
}
```

```
老鼠类：
public class Mouse extends Animal { 
    public Mouse(String myName, int myid) { 
        super(myName, myid); 
    } 
}
```

#### 继承类型
 Java 不支持多继承，但支持多重继承。
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/23.png?raw=true)

##### 继承的特性
* 子类拥有父类**非private**的属性，方法。
* 子类可以拥有自己的属性和方法，即**子类可以对父类进行扩展**。
* 子类可以用自己的方式实现父类的方法。
* Java的继承是单继承，但是可以多重继承
* 提高了类之间的耦合性（继承的缺点，耦合度高就会造成代码之间的联系越紧密，代码独立性越差）。

##### 继承关键字
继承可以使用 extends 和 implements 这两个关键字来实现继承，而且所有的类都是**继承于 java.lang.Object**，当一个类没有继承的两个关键字，则默认继承object（这个类在 java.lang 包中，所以不需要 import）祖先类。

##### extends关键字
在 Java 中，类的继承是单一继承，也就是说，一个子类只能拥有一个父类，所以 extends 只能继承一个类。

```
public class Animal { 
    private String name;   
    private int id; 
    public Animal(String myName, String myid) { 
        //初始化属性值
    } 
    public void eat() {  //吃东西方法的具体实现  } 
    public void sleep() { //睡觉方法的具体实现  } 
} 
 
public class Penguin  extends  Animal{ 
}
```
##### implements关键字
使用 **implements 关键字可以变相的使java具有多继承的特性**，使用范围为类继承接口的情况，可以同时继承多个接口（接口跟接口之间采用逗号分隔）。


```
implements 关键字
public interface A {
    public void eat();
    public void sleep();
}
 
public interface B {
    public void show();
}
 
public class C implements A,B {
}
```
##### super
我们可以通过super关键字来实现对父类成员的访问，用来引用当前对象的父类。

this关键字：指向自己的引用。


```
实例
class Animal {
  void eat() {
    System.out.println("animal : eat");
  }
}
 
class Dog extends Animal {
  void eat() {
    System.out.println("dog : eat");
  }
  void eatTest() {
    this.eat();   // this 调用自己的方法
    super.eat();  // super 调用父类方法
  }
}
 
public class Test {
  public static void main(String[] args) {
    Animal a = new Animal();
    a.eat();
    Dog d = new Dog();
    d.eatTest();
  }
}
输出结果为：

animal : eat
dog : eat
animal : eat
```
##### final
final关键字声明类可以把类定义为不能继承的，即最终类；或者用于修饰方法，该方法不能被子类重写：


```
声明类：

final class 类名 {
   //类体
}

声明方法：

修饰符(public/private/default/protected) final 返回值类型 方法名(){
    //方法体
}
```
注:
* 实例变量也可以被定义为final，被定义为final的变量不能被修改。
* 被声明为final 类的方法自动地声明为final，但是实例变量并不是final

##### 构造器
子类是不继承父类的构造器（构造方法或者构造函数）的，它只是调用（隐式或显式）。如果父类的构造器带有参数，则必须在子类的构造器中显式地通过 super 关键字调用父类的构造器并配以适当的参数列表。

如果父类构造器没有参数，则在子类的构造器中不需要使用super关键字调用父类构造器，系统会自动调用父类的无参构造器。

参构造器。

实例

```
class SuperClass {
  private int n;
  SuperClass(){
    System.out.println("SuperClass()");
  }
  SuperClass(int n) {
    System.out.println("SuperClass(int n)");
    this.n = n;
  }
}
class SubClass extends SuperClass{
  private int n;
  
  SubClass(){
    super(300);
    System.out.println("SubClass");
  }  
  
  public SubClass(int n){
    System.out.println("SubClass(int n):"+n);
    this.n = n;
  }
}
public class TestSuperSub{
  public static void main (String args[]){
    SubClass sc = new SubClass();
    SubClass sc2 = new SubClass(200); 
  }
}
SuperClass(int n)
SubClass
SuperClass()
SubClass(int n):200
```
##### java 中若要在子类调用父类的方法，需使用关键字super。


```
实例
class Animal{
    void go(){
        System.out.println("animal go");
    }
}

class Dog extends Animal{
    void go(){
        //调用父类方法
        super.go();
    }
}

//驱动函数
public static void  main(String[] args){
    Dog dog=new Dog();
    dog.go();
}
输出结果：

animal go
```
##### 面向对象编程——继承和多态

1、为什么使用继承

从已有的类派生出新的类，称为继承。在不同的类中也可能会有共同的特征和动作，可以**把这些共同的特征和动作放在一个类中，让其它类共享**。因此可以定义一个通用类，然后将其扩展为其它多个特定类，这些特定类继承通用类中的特征和动作。继承是Java中实现软件重用的重要手段，避免重复，易于维护，易于理解。

2、父类和子类

如果类 B 从类 A 派生，或者说类 B 扩展自类 A，或者说类 B 继承类 A，则称类A为"父类"，也称为超类、基类；称类B为"子类"，也称为次类、扩展类、派生类。子类从它的父类中继承可访问的数据域和方法，也可以添加新的数据域和新的方法。


3、继承的注意点：

子类不是父类的子集，子类一般比父类包含更多的数据域和方法。父类中的 private 数据域在子类中是不可见的，因此在子类中不能直接使用它们。继承是为"是一个"的关系建模的，父类和其子类间必须存在"是一个"的关系，否则不能用继承。

但也并不是所有"是一个"的关系都应该用继承。例如，正方形是一个矩形，但不能让 Square 类来继承 Rectangle 类，因为正方形不能从矩形扩展得到任何东西。正确的继承关系是 Square 类继承 Shape 类
Java 只允许单一继承（即一个子类只能有一个直接父类），C++ 可以多继承（即一个子类有多个直接父类）。

3、super 关键字

super 表示使用它的类的父类。super 可用于：
* 调用父类的构造方法；
* 调用父类的方法（子类覆盖了父类的方法时）；
* 访问父类的数据域（可以这样用但没有必要这样用）。
* 调用父类的构造方法语法：

```
super();  
或   
super(参数列表);
```

注意：
* super 语句必须是子类构造方法的第一条语句。
* 不能在子类中使用父类构造方法名来调用父类构造方法。
* 父类的构造方法不被子类继承。调用父类的构造方法的唯一途径是使用super关键字，如果子类中没显式调用，则编译器自动将super();作为子类构造方法的第一条语句。这会形成一个**构造方法链**。
* 静态方法中不能使用 super 关键字。

```
调用父类的方法语法：
super.方法名(参数列表);
```

如果是继承的方法，是没有必要使用super来调用，直接即可调用。但如果子类覆盖或重写了父类的方法，则只有使用super才能在子类中调用父类中的被重写的方法。

4、this 关键字

this 关键字表示当前对象。可用于：调用当前类的构造方法，并且必须是方法的第一条语句。如：this(); 调用默认构造方法。this(参数); 调用带参构造方法。
限定当前对象的数据域变量。一般用于方法内的局部变量与对象的数据域变量同名的情况。如 this.num = num。this.num 表示当前对象的数据域变量 num，而 num 表示方法中的局部变量。

5、final 的作用随着所修饰的类型而不同
* final 修饰类中的属性或者变量，无论属性是基本类型还是引用类型，final所起的作用都是变量里面存放的"值"不能变。这个值，对于基本类型来说，变量里面放的就是实实在在的值，如 1，"abc" 等。
* 而引用类型变量里面放的是个地址，所以用final修饰引用类型变量指的是它里面的地址不能变，并不是说这个地址所指向的对象或数组的内容不可以变，这个一定要注意。

例如：类中有一个属性是
```
final Person p=new Person("name");
```
那么你不能对 p 进行重新赋值，但是可以改变 p 里面属性的值 p.setName('newName');

final 修饰属性，声明变量时可以不赋值，而且一旦赋值就不能被修改了。对 final 属性可以在三个地方赋值：声明时、初始化块中、构造方法中，总之一定要赋值。

* final修饰类中的方法可以被继承，但继承后不能被重写。
* final修饰类，类不可以被继承。
* 

6、java文件被编译成class文件时，在子类的所有构造函数中的第一行（第一个语句）会默认自动添加 super() 语句，在执行子类的构造函数前，总是会先执行父类中的构造函数。

在编写代码要注意：
* 如果父类中不含 默认构造函数（就是 类名() ），那么子类中的super()语句就会执行失败，系统就会报错。一般 默认构造函数 编译时会自动添加，但如果类中已经有一个构造函数时，就不会添加。
* 执行父类构造函数的语句只能放在函数内语句的首句，不然会报错。
在继承关系中，在调用函数（方法）或者类中的成员变量时，JVM（JAVA虚拟机）会先检测当前的类（也就是子类）是否含有该函数或者成员变量，如果有，就执行子类中的，如果没有才会执行父类中的。如下：


```
public class Start
{
    public static void main(String[] args)
    {
        Cat cat=new Cat("Jack","黑色");
        cat.eat();
        cat.run();
        cat.sleep();
    }

}

class Animal 
{
    String name;
    
    public Animal(){}//必须要写这个构造函数，不然Cat类的代码会出错
    
    public Animal(String name)
    {
        this.name=name;
    }
    
    void eat()
    {
        System.out.println(name+"正在吃");
    }
    
    void run()
    {
        System.out.println(name+"正在奔跑");
    }
    
    void sleep()
    {
        System.out.println(name+"正在睡觉");
    }
}

class Cat extends Animal
{
    String color;
    public Cat(String name,String color)
    {
        this.name=name;
        this.color=color;
    }
    void eat()
    {
        System.out.println(color+"的"+name+"正在吃鱼");
        }
}
运行结果如下：

黑色的Jack正在吃鱼
Jack正在奔跑
Jack正在睡觉
```

当子类出现与父类一样的函数时，这个被称为 重写 也叫 覆盖

Object类是所有类的直接父类或间接父类，也就是说是所有类的根父类，这个可以运用于参数的传递

如下：


```
public class Start
{
    public static void main(String[] args)
    {
        A a=new A();
        B b=new B();
        C c=new C();
        D d=new D();
        speak(a);
        speak(b);
        speak(c);
        speak(d);
    }
// instanceof 关键字是用于比较类与类是否相同，相同返回true，不同返回false
//当你不清楚你需要的参数是什么类型的，可以用Object来代替，Object可以代替任何类
    static void speak(Object obj)
    {
        if(obj instanceof A)//意思是：如果参数是 A 类，那么就执行一下语句
        {
            A aobj=(A)obj;//这里是向下转换，需要强制转换
            aobj.axx();
        }
        else if(obj instanceof B)
        {
            B bobj=(B)obj;
            bobj.bxx();
        }
        else if(obj instanceof C)
        {
            C cobj=(C)obj;
            cobj.cxx();
        }
    }
}
//这里举了四个类，他们的函数都不同，但都是 Object 类的子类
class A
{
    void axx()
    {
        System.out.println("Good morning!");
        System.out.println("This is A");
    }
}

class B
{
    void bxx()
    {
        System.out.println("Holle!");
        System.out.println("This is B");        
    }
}

class C
{
    void cxx()
    {
        System.out.println("Look!");
        System.out.println("This is C");        
    }
}

class D
{
    void dxx()
    {
        System.out.println("Oh!Bad!");
        System.out.println("This is D");        
    }
}
运行结果：

Good morning!
This is A
Holle!
This is B
Look!
This is C
```

子类的所有构造方法内部， 第一行会（隐式）自动先调用父类的无参构造函数super()；
如果子类构造方法第一行显式调用了父类构造方法，系统就不再调用无参的super()了。
实例：

```
class Base {
    public Base() {
        System.out.println("Base--默认构造方法");
    }
    
    public Base(int c){
        System.out.println("Base--有参构造方法--" + c);
    }
}

public class Derived extends Base {
    public Derived() {
        // super(); //系统会自动隐式先调用父类的无参构造函数 super(); //必须是第一行，否则不能编译 
        System.out.println("Derived--默认构造方法");
    }
    
    public Derived(int c) {
        // super(); //系统会自动隐式先调用父类的无参构造函数 super(); //必须是第一行，否则不能编译
        System.out.println("Derived--有参构造方法" + c);
    }
    
    public Derived(int a, int b) {
        super(a); //如果子类构造方法第一行显式调用了父类构造方法，系统就不再调用无参的super()了。
        System.out.println("Derived--有参构造方法--" + b);
    }
    
    public static void main(String[] args) {
        System.out.println("============子类无参============");
        Derived no = new Derived();
        System.out.println("============子类有参============");
        Derived have = new Derived(33);
        System.out.println("============子类有参============");
        Derived have2 = new Derived(33, 55);
    }
}
运行结果如下：

============子类无参============
Base--默认构造方法
Derived--默认构造方法
============子类有参============
Base--默认构造方法
Derived--有参构造方法33
============子类有参============
Base--有参构造方法--33
Derived--有参构造方法--55
注意：如果父类没有无参构造函数，创建子类时，不能编译，除非在构造函数代码体中的第一行显式调用父类有参构造函数。
```

子类不能直接继承父类中的 private 属性和方法。


```
/**建立一个公共动物父类*/
public class Animal {
    private String name;
    private int id;
    /*由于name和id都是私有的，所以子类不能直接继承，
    需要通过有参构造函数进行继承*/
    public Animal(String myname,int myid) {
        name = myname;
        id = myid;
    }
    public void eat() {
        System.out.println(name+"正在吃");
    }
    public void sleep() {
        System.out.println(name+"正在睡");
    }
    public void introduction() {
        System.out.println("大家好！我是"  +id+"号"+name +".");
    }

}
子类 Penguin 需要通过关键字 super 进行声明

public class Penguin extends Animal {
    public Penguin(String myname,int myid) {
        super(myname,myid); // 声明继承父类中的两个属性
    }
}
具体通过有参构造函数进行继承。

public class PenguinQQ {
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        Penguin QQ = new Penguin("小冰",10086);
        //调用一个有参构造方法
        QQ.eat();
        QQ.sleep();
        QQ.introduction();
    }
}
运行结果:

小冰正在吃
小冰正在睡
大家好！我是10086号小冰.
```

Java 转型问题其实并不复杂，只要记住一句话：**父类引用指向子类对象**。

向上转型(upcasting) 、向下转型(downcasting)。

举个例子：有2个类，Father 是父类，Son 类继承自 Father。

```
Father f1 = new Son();   // 这就叫 upcasting （向上转型)
// 现在 f1 引用指向一个Son对象

Son s1 = (Son)f1;   // 这就叫 downcasting (向下转型)
// 现在f1 还是指向 Son对象
```


第2个例子：

Father f2 = new Father();
Son s2 = (Son)f2;       // 出错，子类引用不能指向父类对象
你或许会问，第1个例子中：Son s1 = (Son)f1; 问什是正确的呢。

很简单因为 f1 指向一个子类对象，Father f1 = new Son(); 子类 s1 引用当然可以指向子类对象了。

而 f2 被传给了一个 Father 对象，Father f2 = new Father(); 子类 s1 引用不能指向父类对象。

总结：

1、父类引用指向子类对象，而子类引用不能指向父类对象。

2、把子类对象直接赋给父类引用叫upcasting向上转型，向上转型不用强制转换吗，如：

Father f1 = new Son();
3、把指向子类对象的父类引用赋给子类引用叫向下转型(downcasting)，要强制转换，如：

f1 就是一个指向子类对象的父类引用。把f1赋给子类引用 s1 即 Son s1 = (Son)f1;

其中 f1 前面的(Son)必须加上，进行强制转换。


对理解继承来说，最重要的事情是，知道哪些东西被继承了，或者说，子类从父类那里得到了什么。答案是：所有的东西，所有的父类的成员，包括变量和方法，都成为了子类的成员，除了构造方法。构造方法是父类所独有的，因为它们的名字就是类的名字，所以父类的构造方法在子类中不存在。除此之外，子类继承得到了父类所有的成员。

但是得到不等于可以随便使用。每个成员有不同的访问属性，子类继承得到了父类所有的成员，但是不同的访问属性使得子类在使用这些成员时有所不同：有些父类的成员直接成为子类的对外的界面，有些则被深深地隐藏起来，即使子类自己也不能直接访问。下表列出了不同访问属性的父类成员在子类中的访问属性。
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/24.png?raw=true)

public的成员直接成为子类的public的成员，protected的成员也直接成为子类的protected的成员。Java的protected的意思是包内和子类可访问，所以它比缺省的访问属性要宽一些。而对于父类的缺省的未定义访问属性的成员来说，他们是在父类所在的包内可见，如果子类不属于父类的包，那么在子类里面，这些缺省属性的成员和private的成员是一样的：不可见。父类的private的成员在子类里仍然是存在的，只是子类中不能直接访问。我们不可以在子类中重新定义继承得到的成员的访问属性。如果我们试图重新定义一个在父类中已经存在的成员变量，那么我们是在定义一个与父类的成员变量完全无关的变量，在子类中我们可以访问这个定义在子类中的变量，在父类的方法中访问父类的那个。尽管它们同名但是互不影响。

在构造一个子类的对象时，父类的构造方法也是会被调用的，而且父类的构造方法在子类的构造方法之前被调用。在程序运行过程中，子类对象的一部分空间存放的是父类对象。因为子类从父类得到继承，在子类对象初始化过程中可能会使用到父类的成员。所以父类的空间正是要先被初始化的，然后子类的空间才得到初始化。在这个过程中，如果父类的构造方法需要参数，如何传递参数就很重要了。


![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/25.png?raw=true)


### Java 重写(Override)与重载(Overload)
#### 重写(Override)
重写是子类对父类的允许访问的方法的实现过程进行重新编写, 返回值和形参都不能改变。即外壳不变，核心重写！

重写的好处在于子类可以根据需要，定义特定于自己的行为。 也就是说子类能够根据需要实现父类的方法。

**重写方法不能抛出新的检查异常或者比被重写方法申明更加宽泛的异常**。

例如：父类的一个方法申明了一个检查异常IOException，但是在重写这个方法的时候不能抛出 Exception 异常，因为Exception是IOException的父类，只能抛出IOException的子类异常。

#### 方法的重写规则
* 参数列表必须完全与被重写方法的相同；
* 返回类型必须完全与被重写方法的返回类型相同；
* 访问权限不能比父类中被重写的方法的访问权限更低。例如：如果父类的一个方法被声明为public，那么在子类中重写该方法就不能声明为protected。
* 父类的成员方法只能被它的子类重写。
* 声明为final的方法不能被重写。
* 声明为static的方法不能被重写，但是能够被再次声明。
* 子类和父类在同一个包中，那么子类可以重写父类所有方法，除了声明为private和final的方法。
* 子类和父类不在同一个包中，那么子类只能够重写父类的声明为public和protected的非final方法。
* 重写的方法能够抛出任何非强制异常，无论被重写的方法是否抛出异常。但是，重写的方法不能抛出新的强制性异常，或者比被重写方法声明的更广泛的强制性异常，反之则可以。构造方法不能被重写。
* 如果不能继承一个方法，则不能重写这个方法。


####  重载(Overload)
重载(overloading) 是在一个类里面，方法名字相同，而参数不同。返回类型可以相同也可以不同。

每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

最常用的地方就是构造器的重载。

重载规则:

* 被重载的方法必须改变参数列表(参数个数或类型不一样)；
* 被重载的方法可以改变返回类型；
* 被重载的方法可以改变访问修饰符；
* 被重载的方法可以声明新的或更广的检查异常；
* 方法能够在同一个类中或者在一个子类中被重载。
* 无法以返回值类型作为重载函数的区分标准。

#### Java 多态

多态是同一个行为具有多个不同表现形式或形态的能力。

多态就是同一个接口，使用不同的实例而执行不同操作，如图所示：
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/26.png?raw=true)

多态性是对象多种表现形式的体现。

现实中，比如我们按下 F1 键这个动作：

如果当前在 Flash 界面下弹出的就是 AS 3 的帮助文档；
如果当前在 Word 下弹出的就是 Word 帮助；
在 Windows 下弹出的就是 Windows 帮助和支持。
同一个事件发生在不同的对象上会产生不同的结果。

多态的优点
1. 消除类型之间的耦合关系
2. 可替换性
3. 可扩充性
4. 接口性
5. 灵活性
6. 简化性
多态存在的三个必要条件
继承
重写
**父类引用指向子类对象**


```
Parent p = new Child();
```


使用多态方式调用方法时，首先检查父类中是否有该方法，如果没有，则编译错误；如果有，再去调用子类的同名方法。

多态的好处：可以使程序有良好的扩展，并可以对所有类的对象进行通用处理。

多态的实现方式
* 方式一：重写
* 方式二：接口
* 方式三：抽象类和抽象方法

多态，可以总结以下几点：

一、使用父类类型的引用指向子类的对象；

二、该引用只能调用父类中定义的方法和变量；

三、如果子类中重写了父类中的一个方法，那么在调用这个方法的时候，将会调用子类中的这个方法；（动态连接、动态调用）;

四、变量不能被重写（覆盖），”重写“的概念只针对方法，如果在子类中”重写“了父类中的变量，那么在编译时会报错。

多态引用时，构造子类对象时的构造方法的调用顺序

1，先调用超类的构造方法，多重超类首先调用最远超类的方法；

2，然后再执行当前子类的构造方法；

调用时需要谨慎处理调用方法。


#### Java抽象类
一个类中没有包含足够的信息来描绘一个具体的对象，这样的类就是抽象类。

**抽象类除了不能实例化对象之外**，类的其它功能依然存在，成员变量、成员方法和构造方法的访问方式和普通类一样。

由于抽象类不能实例化对象，所以抽象类必须被继承，才能被使用。也是因为这个原因，通常在设计阶段决定要不要设计抽象类。

父类包含了子类集合的常见的方法，但是由于父类本身是抽象的，所以不能使用这些方法。

在Java中抽象类表示的是一种继承关系，一个类只能继承一个抽象类，而一个类却可以实现多个接口。

##### 抽象方法
如果你想设计这样一个类，该类包含一个特别的成员方法，该方法的具体实现由它的子类确定，那么你可以在父类中声明该方法为抽象方法。

Abstract关键字同样可以用来声明抽象方法，抽象方法只包含一个方法名，而没有方法体。

抽象方法没有定义，方法名后面直接跟一个分号，而不是花括号。

声明抽象方法会造成以下两个结果：

**如果一个类包含抽象方法，那么该类必须是抽象类**。
任何子类必须重写父类的抽象方法，或者声明自身为抽象类。
继承抽象方法的子类必须重写该方法。否则，该子类也必须声明为抽象类。最终，必须有子类实现该抽象方法，否则，从最初的父类到最终的子类都不能用来实例化对象。

##### 抽象类总结规定
1. 抽象类不能被实例化(初学者很容易犯的错)，如果被实例化，就会报错，编译无法通过。只有抽象类的非抽象子类可以创建对象。

2. 抽象类中不一定包含抽象方法，但是有抽象方法的类必定是抽象类。

3. 抽象类中的抽象方法只是声明，不包含方法体，就是不给出方法的具体实现也就是方法的具体功能。

4. 构造方法，类方法（用static修饰的方法）不能声明为抽象方法。

5. 抽象类的子类必须给出抽象类中的抽象方法的具体实现，除非该子类也是抽象类。

#### Java 封装
在面向对象程式设计方法中，封装（英语：Encapsulation）是指一种将抽象性函式接口的实现细节部份包装、隐藏起来的方法。

封装可以被认为是一个保护屏障，防止该类的代码和数据被外部类定义的代码随机访问。

要访问该类的代码和数据，必须通过严格的接口控制。

封装最主要的功能在于我们能修改自己的实现代码，而不用修改那些调用我们代码的程序片段。

适当的封装可以让程式码更容易理解与维护，也加强了程式码的安全性。

封装的优点
1. 良好的封装能够减少耦合。

2. 类内部的结构可以自由修改。

3. 可以对成员变量进行更精确的控制。

4. 隐藏信息，实现细节。

##### 实现Java封装的步骤
1. 修改属性的可见性来限制对属性的访问（一般限制为private），例如：

public class Person {
    private String name;
    private int age;
}
这段代码中，将name和age属性设置为私有的，只能本类才能访问，其他类都访问不了，如此就对信息进行了隐藏。

2. 对每个值属性提供对外的公共方法访问，也就是创建一对赋取值方法，用于对私有属性的访问，例如：

```
public class Person{
    private String name;
    private int age;
​
    public int getAge(){
      return age;
    }
​
    public String getName(){
      return name;
    }
​
    public void setAge(int age){
      this.age = age;
    }
​
    public void setName(String name){
      this.name = name;
    }
}
```

#### Java 接口
接口（英文：Interface），在JAVA编程语言中是一个抽象类型，是抽象方法的集合，接口通常以interface来声明。一个类通过继承接口的方式，从而来继承接口的抽象方法。

接口并不是类，编写接口的方式和类很相似，但是它们属于不同的概念。类描述对象的属性和方法。接口则包含类要实现的方法。

除非实现接口的类是抽象类，否则该类要定义接口中的所有方法。

接口无法被实例化，但是可以被实现。一个实现接口的类，必须实现接口内所描述的所有方法，否则就必须声明为抽象类。另外，在 Java 中，接口类型可用来声明一个变量，他们可以成为一个空指针，或是被绑定在一个以此接口实现的对象。

接口与类相似点：
* 一个接口可以有多个方法。
* 接口文件保存在 .java 结尾的文件中，文件名使用接口名。
* 接口的字节码文件保存在 .class 结尾的文件中。
* 接口相应的字节码文件必须在与包名称相匹配的目录结构中。

接口与类的区别：
* 接口不能用于实例化对象。
* 接口没有构造方法。
* 接口中所有的方法必须是抽象方法。
* 接口不能包含成员变量，除了 static 和 final 变量。
* 接口不是被类继承了，而是要被类实现。接口支持多继承。

接口特性
* 接口中每一个方法也是隐式抽象的,接口中的方法会被隐式的指定为 public abstract（只能是 public abstract，其他修饰符都会报错）。
* 接口中可以含有变量，但是接口中的变量会被隐式的指定为 public static final 变量（并且只能是 public，用 private 修饰会报编译错误）。
* 接口中的方法是不能在接口中实现的，只能由实现接口的类来实现接口中的方法。

抽象类和接口的区别
1. 抽象类中的方法可以有方法体，就是能实现方法的具体功能，但是接口中的方法不行。
2. 抽象类中的成员变量可以是各种类型的，而接口中的成员变量只能是 public static final 类型的。
3. 接口中不能含有静态代码块以及静态方法(用 static 修饰的方法)，而抽象类是可以有静态代码块和静态方法。
4. 一个类只能继承一个抽象类，而一个类却可以实现多个接口。


```
public interface NameOfInterface
{
   //任何类型 final, static 字段
   //抽象方法
}
```

接口有以下特性：
* 接口是隐式抽象的，当声明一个接口的时候，不必使用abstract关键字。
* 接口中每一个方法也是隐式抽象的，声明时同样不需要abstract关键字。
* 接口中的方法都是公有的。

接口的实现
* 当类实现接口的时候，类要实现接口中所有的方法。否则，类必须声明为抽象的类。
* 类使用implements关键字实现接口。在类声明中，Implements关键字放在class声明后面。
* 实现一个接口的语法，可以使用这个公式：

```
...implements 接口名称[, 其他接口名称, 其他接口名称..., ...] ...
```

重写接口中声明的方法时，需要注意以下规则：

* 类在实现接口的方法时，不能抛出强制性异常，只能在接口中，或者继承接口的抽象类中抛出该强制性异常。
* 类在重写方法时要保持一致的方法名，并且应该保持相同或者相兼容的返回值类型。
* 如果实现接口的类是抽象类，那么就没必要实现该接口的方法。

在实现接口的时候，也要注意一些规则：

* 一个类可以同时实现多个接口。
* 一个类只能继承一个类，但是能实现多个接口。
* 一个接口能继承另一个接口，这和类之间的继承比较相似。

接口的继承
一个接口能继承另一个接口，和类之间的继承方式比较相似。接口的继承使用extends关键字，子接口继承父接口的方法。

标记接口

* 最常用的继承接口是没有包含任何方法的接口。

* 标记接口是没有任何方法和属性的接口.它仅仅表明它的类属于一个特定的类型,供其他代码来测试允许做一些事情。

* 标记接口作用：简单形象的说就是给某个对象打个标（盖个戳），使对象拥有某个或某些特权。
* 
建立一个公共的父接口：
正如EventListener接口，这是由几十个其他接口扩展的Java API，你可以使用一个标记接口来建立一组接口的父接口。例如：当一个接口继承了EventListener接口，Java虚拟机(JVM)就知道该接口将要被用于一个事件的代理方案。

#### 向一个类添加数据类型：
这种情况是标记接口最初的目的，实现标记接口的类不需要定义任何接口方法(因为标记接口根本就没有方法)，但是该类通过多态性变成一个接口类型。

1.接口可以多继承

2.接口的方法声明必须是 public abstract 即便不写默认也是

3.接口里面不能包含方法具体实现

4.类实继承接口必须实现接口里申明的全部方法，除非该类是抽象类

5.类里面可以声明 public static final 修饰的变量

6.接口不能被实例化，但是可以被实现类创建

#### 什么时候使用抽象类和接口
如果你拥有一些方法并且想让它们中的一些有默认实现，那么使用抽象类吧。
如果你想实现多重继承，那么你必须使用接口。由于Java不支持多继承，子类不能够继承多个类，但可以实现多个接口。因此你就可以使用接口来解决它。
如果基本功能在不断改变，那么就需要使用抽象类。如果不断改变基本功能并且使用接口，那么就需要改变所有实现了该接口的类。

在 JDK1.8，允许我们给接口添加两种非抽象的方法实现：

1、默认方法，添加 default 修饰即可；

2、静态方法，使用 static 修饰；示例如下：


```
interface Test{
    //这个是默认方法
    default String get(String aa){
        System.out.println("我是jdk1.8默认实现方法...");
        return "";
    }   
    //这个是静态方法    
    static void staticmethod(){
        System.out.println("我是静态方法");
    }
}
```

调用得话，静态方法只能通过接口名调用，不可以通过实现类的类名或者实现类的对象调用，default 方法只能通过接口实现类的对象来调用。

接口的含义理解

接口可以理解成统一的协议, 而接口中的属性也属于协议中的内容。但是接口的属性都是公共的，静态的，最终的。

接口的成员特点：

 1、成员变量只能是常量，**默认修饰符 public static final**
 
 2、成员方法只能是抽象方法。默认修饰符 public abstract
所以，Java 接口中，使用变量的时候，变量必须被赋值。

//所以接口定义属性

```
public interface People {
    int age=10;
    String name="输出名字"; // 接口里面定义的成员变量都是  public static final 修饰
    public void eat();　　
}
```

所有的变量必须给出初始值，且绝对不会被修改，因为隐藏的修饰符为 public static final。

Java 标识接口

标识接口是没有任何方法和属性的接口，它仅仅表明它的类属于一个特定的类型，供其他代码来测试允许做一些事情。

使用标记接口的唯一目的是使得可以用 instanceof 进行类型查询，例如：

if(obj instanceof Cloneable) {………} 
一些容器例如 Ejb 容器，servlet 容器或运行时环境依赖标记接口识别类是否需要进行某种处理，比如 serialialbe 接口标记类需要进行序列化操作。

 java.io.Serializable：未实现此接口的类将无法使其任何状态序列化或反序列化。为保证 serialVersionUID 值跨不同 java 编译器实现的一致性，序列化类必须声明一个明确的 serialVersionUID 值。
 java.lang.Cloneable：表明 Object.clone() 方法可以合法地对该类实例进行按字段复制.实现此接口的类应该使用公共方法重写 Object.clone（它是受保护的）。如果在没有实现 Cloneable 接口的实例上调用 Object 的 clone 方法，则会导致抛出 CloneNotSupportedException 异常。
 java.util.RandomAccess：用来表明其支持快速（通常是固定时间）随机访问。此接口的主要目的是允许一般的算法更改其行为，从而在将其应用到随机或连续访问列表时能提供良好的性能。
 java.rmi.Remote：Remote 接口用于标识其方法可以从非本地虚拟机上调用的接口。任何远程对象都必须直接或间接实现此接口。只有在“远程接口”（扩展 java.rmi.Remote 的接口）中指定的这些方法才可远程使用。
 
 #### 接口类型可用来声明一个变量，他们可以成为一个空指针，或是被绑定在一个以此接口实现的对象。这其实是通过接口实现多态的关键。


```
interface Fu {
    public abstract void method();
}
class Zi implements Fu {
    public void method(){
        System.out.println(“重写接口抽象方法”);
    }
}
//接口的多态使用
Fu fu = new Zi();
```

#### Java 抽象类和接口总结

 1.abstract class 在 Java 语言中表示的是一种继承关系，一个类只能使用一次继承关系。但是，一个类却可以实现多个 interface。
 
 2.在 abstract class 中可以有自己的数据成员，也可以有非 abstarct 的成员方法，而在 interface 中，只能够有静态的不能被修改的数据成员（也就是必须是 static final 的，不过在 interface 中一般不定义数据成员），所有的成员方法都是 abstract 的。
 
 3.abstract class 和 interface 所反映出的设计理念不同。其实 abstract class 表示的是 "is-a" 关系，interface 表示的是 "like-a" 关系。
 
 4.实现抽象类和接口的类必须实现其中的所有方法。抽象类中可以有非抽象方法。接口中则不能有实现方法。
 
 5.接口中定义的变量默认是 public static final 型，且必须给其初值，所以实现类中不能重新定义，也不能改变其值。
 
 6.抽象类中的变量默认是 friendly 型，其值可以在子类中重新定义，也可以重新赋值。
 
 7.接口中的方法默认都是 public,abstract 类型的。
 
结论: abstract class 和 interface 是 Java 语言中的两种定义抽象类的方式，它们之间有很大的相似性。但是对于它们的选择却又往往反映出对于问题领域中的概念本质的理解、对于设计意图的反映是否正确、合理，因为它们表现了概念间的不同的关系（虽然都能够实现需求的功能）。这其实也是语言的一种的惯用法，希望读者朋友能够细细体会。

#### Java 包(package)
为了更好地组织类，Java提供了包机制，用于区别类名的命名空间。

包的作用
1、把功能相似或相关的类或接口组织在同一个包中，方便类的查找和使用。

2、如同文件夹一样，包也采用了树形目录的存储方式。同一个包中的类名字是不同的，不同的包中的类的名字是可以相同的，**当同时调用两个不同包中相同类名的类时，应该加上包名加以区别**。因此，包可以避免名字冲突。

3、包也限定了访问权限，拥有包访问权限的类才能访问某个包中的类。

Java 使用包（package）这种机制是为了防止命名冲突，访问控制，提供搜索和定位类（class）、接口、枚举（enumerations）和注释（annotation）等。

### Java 方法
println() 是一个方法。
System 是系统类。
out 是标准输出对象。
这句话的用法是调用系统类 System 中的标准输出对象 out 中的方法 println()。

#### 什么是方法呢？
* Java方法是语句的集合，它们在一起执行一个功能。
* 方法是解决一类问题的步骤的有序组合
* 方法包含于类或对象中
* 方法在程序中被创建，在其他地方被引用
#### 方法的优点
* 使程序变得更简短而清晰。
* 有利于程序维护。
* 可以提高程序开发的效率。
* 提高了代码的重用性。
#### 方法的命名规则
* 方法的名字的第一个单词应以小写字母作为开头，后面的单词则用大写字母开头写，不使用连接符。例如：addPerson。
* 下划线可能出现在JUnit测试方法名称中用以分隔名称的逻辑组件。一个典型的模式是：test<MethodUnderTest>_<state>，例如 testPop_emptyStack。

#### 方法的定义
一般情况下，定义一个方法包含以下语法：

```
修饰符 返回值类型 方法名(参数类型 参数名){
    ...
    方法体
    ...
    return 返回值;
}
```

方法包含一个方法头和一个方法体。下面是一个方法的所有部分：

* 修饰符：修饰符，这是可选的，告诉编译器如何调用该方法。定义了该方法的访问类型。
* 返回值类型 ：方法可能会返回值。returnValueType是方法返回值的数据类型。有些方法执行所需的操作，但没有返回值。在这种情况下，returnValueType 是关键字void。
* 方法名：是方法的实际名称。方法名和参数表共同构成方法签名。
* 参数类型：参数像是一个占位符。当方法被调用时，传递值给参数。这个值被称为实参或变量。参数列表是指方法的参数类型、顺序和参数的个数。参数是可选的，方法可以不包含任何参数。
* 方法体：方法体包含具体的语句，定义该方法的功能。

**注意： 在一些其它语言中方法指过程和函数。一个返回非void类型返回值的方法称为函数；一个返回void类型返回值的方法叫做过程。**

#### 方法调用

Java 支持两种调用方法的方式，根据方法是否返回值来选择。

当程序调用一个方法时，程序的控制权交给了被调用的方法。当被调用方法的返回语句执行或者到达方法体闭括号时候交还控制权给程序。

当方法返回一个值的时候，方法调用通常被当做一个值。

#### void 关键字

#### 通过值传递参数
调用一个方法时候需要提供参数，你必须按照参数列表指定的顺序提供。

#### 方法的重载
#### 变量作用域
* 变量的范围是程序中该变量可以被引用的部分。
* 方法内定义的变量被称为局部变量。
* 局部变量的作用范围从声明开始，直到包含它的块结束。
* 局部变量必须声明才可以使用。
* 方法的参数范围涵盖整个方法。参数实际上是一个局部变量。
* for循环的初始化部分声明的变量，其作用范围在整个循环。
* 但循环体内声明的变量其适用范围是从它声明到循环体结束。
* 你可以在一个方法里，不同的非嵌套块中多次声明一个具有相同的名称局部变量，但你不能在嵌套块内两次声明局部变量。
*
#### 命令行参数的使用
有时候你希望运行一个程序时候再传递给它消息。这要靠传递命令行参数给main()函数实现。
命令行参数是在执行程序时候紧跟在程序名字后面的信息。

#### 构造方法
当一个对象被创建时候，构造方法用来初始化该对象。构造方法和它所在类的名字相同，但构造方法没有返回值。

通常会使用构造方法给一个类的实例变量赋初值，或者执行其它必要的步骤来创建一个完整的对象。

不管你是否自定义构造方法，所有的类都有构造方法，因为Java自动提供了一个默认构造方法，它把所有成员初始化为0。

一旦你定义了自己的构造方法，默认构造方法就会失效。

#### 可变参数（参数的个数没有确定）扩展运算符
JDK 1.5 开始，Java支持传递同类型的可变参数给一个方法。

方法的可变参数的声明如下所示：

```
typeName... parameterName

```
#### finalize() 方法
Java 允许定义这样的方法，它在对象被垃圾收集器析构(回收)之前调用，这个方法叫做 finalize( )，它用来清除回收对象。

例如，你可以使用 finalize() 来确保一个对象打开的文件被关闭了。

在 finalize() 方法里，你必须指定在对象销毁时候要执行的操作。
finalize() 一般格式是：

```
protected void finalize()
{
   // 在这里终结代码
}
```

Java 的内存回收可以由 JVM 来自动完成。如果你手动使用，则可以使用上面的方法。


---
#### Java 流(Stream)、文件(File)和IO
* Java.io 包几乎包含了所有操作输入、输出需要的类。所有这些流类代表了输入源和输出目标。
* Java.io 包中的流支持很多种格式，比如：基本类型、对象、本地化字符集等等。
* 一个流可以理解为一个数据的序列。输入流表示从一个源读取数据，输出流表示向一个目标写数据。
* Java 为 I/O 提供了强大的而灵活的支持，使其更广泛地应用到文件传输和网络编程中。

#### 读取控制台输入
Java 的控制台输入由 System.in 完成。

为了获得一个绑定到控制台的字符流，你可以把System.in包装在一个BufferedReader对象中来创建一个字符流。

下面是创建 BufferedReader 的基本语法：

```
BufferedReader br = new BufferedReader(new 
                      InputStreamReader(System.in));
```

BufferedReader 对象创建后，我们便可以使用 read() 方法从控制台读取一个字符，或者用 readLine() 方法读取一个字符串。

#### 从控制台读取多字符输入

从 BufferedReader 对象读取一个字符要使用 read() 方法，它的语法如下：


```
int read( ) throws IOException
```

每次调用 read() 方法，它从输入流读取一个字符并把该字符作为整数值返回。 当流结束的时候返回 -1。该方法抛出 IOException。


#### 从控制台读取字符串

从标准输入读取一个字符串需要使用 BufferedReader 的 readLine() 方法。

它的一般格式是：

```
String readLine( ) throws IOException
```

#### 控制台输出
此前已经介绍过，控制台的输出由 print( ) 和 println() 完成。这些方法都由类 PrintStream 定义，System.out 是该类对象的一个引用。

PrintStream 继承了 OutputStream类，并且实现了方法 write()。这样，write() 也可以用来往控制台写操作。

PrintStream 定义 write() 的最简单格式如下所示：

```
void write(int byteval)
```
该方法将 byteval 的低八位字节写到流中。

#### 读写文件
如前所述，一个流被定义为一个数据序列。输入流用于从源读取数据，输出流用于向目标写数据。

下图是一个描述输入流和输出流的类层次图。
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/12.png?raw=true)

#### FileInputStream
该流用于从文件读取数据，它的对象可以用关键字 new 来创建。

有多种构造方法可用来创建对象。

可以使用字符串类型的文件名来创建一个输入流对象来读取文件：

```
InputStream f = new FileInputStream("C:/java/hello");
```
也可以使用一个文件对象来创建一个输入流对象来读取文件。我们首先得使用 File() 方法来创建一个文件对象：

```
File f = new File("C:/java/hello");
InputStream out = new FileInputStream(f);
```
创建了InputStream对象，就可以使用下面的方法来读取流或者进行其他的流操作。

![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/13.png?raw=true)

#### FileOutputStream
* 该类用来创建一个文件并向文件中写数据。
* 如果该流在打开文件进行输出前，目标文件不存在，那么该流会创建该文件。
* 有两个构造方法可以用来创建 FileOutputStream 对象。
* 使用字符串类型的文件名来创建一个输出流对象：

```
OutputStream f = new FileOutputStream("C:/java/hello")
```
也可以使用一个文件对象来创建一个输出流来写文件。我们首先得使用File()方法来创建一个文件对象：


```
File f = new File("C:/java/hello");
InputStream out = new FileInputStream(f);
```
创建了InputStream对象，就可以使用下面的方法来读取流或者进行其他的流操作。

![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/13.png?raw=true)

#### FileOutputStream
* 该类用来创建一个文件并向文件中写数据。
* 如果该流在打开文件进行输出前，目标文件不存在，那么该流会创建该文件。
* 有两个构造方法可以用来创建 FileOutputStream 对象。
* 使用字符串类型的文件名来创建一个输出流对象：

```
OutputStream f = new FileOutputStream("C:/java/hello")
```
也可以使用一个文件对象来创建一个输出流来写文件。我们首先得使用File()方法来创建一个文件对象：


```
File f = new File("C:/java/hello");
OutputStream f = new FileOutputStream(f);
```
创建OutputStream对象完成后，就可以使用下面的方法来写入流或者进行其他的流操作。


![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/15.png?raw=true)

#### 文件和I/O
还有一些关于文件和I/O的类，我们也需要知道：
* File Class(类)
* FileReader Class(类)
* FileWriter Class(类)

#### Java中的目录

创建目录：
File类中有两个方法可以用来创建文件夹：
* mkdir( )方法创建一个文件夹，成功则返回true，失败则返回false。失败表明File对象指定的路径已经存在，或者由于整个路径还不存在，该文件夹不能被创建。
* mkdirs()方法创建一个文件夹和它的所有父文件夹。

**注意： Java 在 UNIX 和 Windows 自动按约定分辨文件路径分隔符。如果你在 Windows 版本的 Java 中使用分隔符 (/) ，路径依然能够被正确解析。**

#### 读取目录
* 一个目录其实就是一个 File 对象，它包含其他文件和文件夹。
* 如果创建一个 File 对象并且它是一个目录，那么调用 isDirectory() 方法会返回 true。
* 可以通过调用该对象上的 list() 方法，来提取它包含的文件和文件夹的列表。

#### 删除目录或文件
删除文件可以使用 java.io.File.delete() 方法。


---
### Java Scanner 类
java.util.Scanner 是 Java5 的新特征，我们可以通过 Scanner 类来获取用户的输入。

下面是创建 Scanner 对象的基本语法：

```
Scanner s = new Scanner(System.in);
```
next() 与 nextLine() 区别
* next():
  * 一定要读取到有效字符后才可以结束输入。
  * 对输入有效字符之前遇到的空白，next() 方法会自动将其去掉
  * 只有输入有效字符后才将其后面输入的空白作为分隔符或者结束符。
  * next() 不能得到带有空格的字符串。
* nextLine()：
  * 以Enter为结束符,也就是说 nextLine()方法返回的是输入回车之前的所有字符。
  * 可以获得空白。
