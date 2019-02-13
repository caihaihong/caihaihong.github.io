### Java 对象和类
Java作为一种面向对象语言。支持以下基本概念：
* 多态
* 继承
* 封装
* 抽象
* 类
* 对象
* 实例
* 方法
* 重载

#### 对象：对象是类的一个实例（对象不是找个女朋友），有状态和行为。例如，一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等。
#### 类：类是一个模板，它描述一类对象的行为和状态。

一个类可以包含以下类型变量：

* 局部变量：在方法、构造方法或者语句块中定义的变量被称为局部变量。变量声明和初始化都是在方法中，方法结束后，变量就会自动销毁。
* 成员变量：成员变量是定义在类中，方法体之外的变量。这种变量在创建对象的时候实例化。成员变量可以被类中方法、构造方法和特定类的语句块访问。
* 类变量：类变量也声明在类中，方法体之外，**但必须声明为static类型。**
#### 构造方法
每个类都有构造方法。如果没有显式地为类定义构造方法，Java编译器将会为该类提供一个默认构造方法。
在创建一个对象的时候，至少要调用一个构造方法。构造方法的名称必须与类同名，**一个类可以有多个构造方法**

#### 创建对象
对象是根据类创建的。在Java中，使用关键字new来创建一个新的对象。创建对象需要以下三步：

* 声明：声明一个对象，包括对象名称和对象类型。
* 实例化：使用关键字new来创建一个对象。
* **初始化：使用new创建对象时，会调用构造方法初始化对象。

#### 源文件声明规则
在本节的最后部分，我们将学习源文件的声明规则。当在一个源文件中定义多个类，并且还有import语句和package语句时，要特别注意这些规则。

* 一个源文件中只能有一个public类
* 一个源文件可以有多个非public类
* **源文件的名称应该和public类的类名保持一致**。
* 如果一个类定义在某个包中，那么package语句应该在源文件的首行。
* 如果源文件包含import语句，那么应该放在package语句和类定义之间。如果没有package语句，那么import语句应该在源文件中最前面。
* import语句和package语句对源文件中定义的所有类都有效。在同一源文件中，不能给不同的类不同的包声明。
* 类有若干种访问级别，并且类也分不同的类型：抽象类和final类等。
* 除了上面提到的几种类型，Java还有一些特殊的类，如：内部类、匿名类。

#### Java包
包主要用来对类和接口进行分类。当开发Java程序时，可能编写成百上千的类，因此很有必要对类和接口进行分类。

#### Import语句
在Java中，如果给出一个完整的限定名，包括包名、类名，那么Java编译器就可以很容易地定位到源代码或者类。Import语句就是用来提供一个合理的路径，使得编译器可以找到某个类。

---

### Java 基本数据类型

**变量就是申请内存来存储值**。内存管理系统根据变量的类型为变量分配存储空间，分配的空间只能用来储存该类型数据。
内置数据类型
Java语言提供了八种基本类型。六种数字类型（四个整数型，两个浮点型），一种字符类型，还有一种布尔型。

* byte：

  * byte 数据类型是8位、有符号的，以二进制补码表示的整数；
  * 最小值是 -128（-2^7）；
  * 最大值是 127（2^7-1）；
  * 默认值是 0；
  * byte 类型用在大型数组中节约空间，主要代替整数，因为byte变量占用的空间只有int类型的四分之一；
  * 例子：byte a = 100，byte b = -50。

* short：
  * short 数据类型是16位、有符号的以二进制补码表示的整数
  * 最小值是 -32768（-2^15）
  * 最大值是 32767（2^15 - 1）
  * Short 数据类型也可以像byte那样节省空间。一个short变量是int型变量所占空间的二分之一
  * 默认值是 0；
  * 例子：short s = 1000，short r = -20000

* int：
  * int 数据类型是32位、有符号的以二进制补码表示的整数；
  * 最小值是 -2,147,483,648（-2^31）；
  * 最大值是 2,147,483,647（2^31 - 1）；
  * 一般地整型变量默认为 int 类型；
  * 默认值是 0 
  * 例子：int a = 100000, int b = -200000。
  
* long：
  * long 数据类型是 64 位、有符号的以二进制补码表示的整数；
  * 最小值是 -9,223,372,036,854,775,808（-2^63）；
  * 最大值是 9,223,372,036,854,775,807（2^63 -1）；
  * 这种类型主要使用在需要比较大整数的系统上
  * 默认值是 0L；
  * 例子： long a = 100000L，Long b = -200000L。"L"理论上不分大小写，但是若写成"l"容易与数字"1"混淆，不容易分辩。所以最好大写。
  
* float：
  * float 数据类型是单精度、32位、符合IEEE 754标准的浮点数；
  * float 在储存大型浮点数组的时候可节省内存空间；
  * 默认值是 0.0f；
  * 浮点数不能用来表示精确的值，如货币
  * 例子：float f1 = 234.5f。

* double：
  * double 数据类型是双精度、64 位、符合IEEE 754标准的浮点数；
  * 浮点数的默认类型为double类型；
  * double类型同样不能表示精确的值，如货币
  * 默认值是 0.0d；
  * 例子：double d1 = 123.4。

* boolean：
  * boolean数据类型表示一位的信息
  * 只有两个取值：true 和 false
  * 这种类型只作为一种标志来记录 true/false 情况
  * 默认值是 false；
  * 例子：boolean one = true。
  
* char：
  * char类型是一个单一的 16 位 Unicode 字符
  * 最小值是 \u0000（即为0）；
  * 最大值是 \uffff（即为65,535）；
  * char 数据类型可以储存任何字符；
  * 例子：char letter = 'A';。
  

#### 引用类型
* 在Java中，引用类型的变量非常类似于C/C++的指针。引用类型指向一个对象，指向对象的变量是引用变量。这些变量在声明时被指定为一个特定的类型，比如 Employee、Puppy 等。变量一旦声明后，类型就不能被改变了。
* 对象、数组都是引用数据类型。
* 所有引用类型的默认值都是null。
* 一个引用变量可以用来引用任何与之兼容的类型。
* 例子：Site site = new Site("Runoob")。

#### Java 常量
常量在程序运行时是不能被修改的。
在 Java 中使用 final 关键字来修饰常量，声明方式和变量类似：
虽然常量名也可以用小写，但为了便于识别，通常使用大写字母表示常量。
```
final double PI = 3.1415927;
```
#### Java语言支持一些特殊的转义字符序列。
* \n 换行
* \r 回车
* \\ 反斜杠

#### 自动类型转换
整型、实型（常量）、字符型数据可以混合运算。运算中，不同类型的数据先转化为同一类型，然后进行运算。转换从低级到高级。

```
低  ------------------------------------>  高

byte,short,char—> int —> long—> float —> double
```
#### 数据类型转换必须满足如下规则：

* 不能对boolean类型进行类型转换。
* 不能把对象类型转换成不相关类的对象。
* 在把容量大的类型转换为容量小的类型时必须使用强制类型转换。
* 转换过程中可能导致溢出或损失精度
* 浮点数到整数的转换是通过舍弃小数得到，而不是四舍五入
* 必须满足转换前的数据类型的位数要低于转换后的数据类型

#### 强制类型转换
* 条件是转换的数据类型必须是兼容的。
* 格式：(type)value type是要强制类型转换后的数据类型

#### 隐含强制类型转换
* 整数的默认类型是 int。
* 浮点型不存在这种情况，因为在定义 float 类型时必须在数字后面跟上F或者f。


---

### Java 变量类型
在Java语言中，所有的变量在使用前必须声明。声明变量的基本格式如下：
type identifier [ = value][, identifier [= value] ...] ;

#### Java语言支持的变量类型有：

* 类变量：独立于方法之外的变量，用 static 修饰。
* 实例变量：独立于方法之外的变量，不过没有 static 修饰。
* 局部变量：类的方法中的变量。

#### Java 局部变量
* 局部变量声明在方法、构造方法或者语句块中；
* 局部变量在方法、构造方法、或者语句块被执行的时候创建，当它们执行完成后，变量将会被销毁；
* 访问修饰符不能用于局部变量；
* 局部变量只在声明它的方法、构造方法或者语句块中可见；
* **局部变量是在栈上分配的**。
* 局部变量没有默认值，所以局部变量被声明后，必须经过初始化，才可以使用。

#### 实例变量
* 实例变量声明在一个类中，但在方法、构造方法和语句块之外；
* 当一个对象被实例化之后，每个实例变量的值就跟着确定；
* 实例变量在对象创建的时候创建，在对象被销毁的时候销毁；
* 实例变量的值应该至少被一个方法、构造方法或者语句块引用，使得外部能够通过这些方式获取实例变量信息；
* 实例变量可以声明在使用前或者使用后；
* 访问修饰符可以修饰实例变量；
* 实例变量对于类中的方法、构造方法或者语句块是可见的。一般情况下应该把实例变量设为私有。通过使用访问修饰符可以使实例变量对子类可见；
* 实例变量具有默认值。数值型变量的默认值是0，布尔型变量的默认值是false，引用类型变量的默认值是null。变量的值可以在声明时指定，也可以在构造方法中指定；
* 实例变量可以直接通过变量名访问。但在静态方法以及其他类中，就应该使用完全限定名：ObejectReference.VariableName。

#### 类变量（静态变量）
* **类变量也称为静态变量**，在类中以static关键字声明，但必须在方法构造方法和语句块之外。
* 无论一个类创建了多少个对象，类只拥有类变量的一份拷贝。
* 静态变量除了被声明为常量外很少使用。常量是指声明为public/private，final和static类型的变量。常量初始化后不可改变。
* 静态变量储存在静态存储区。经常被声明为常量，很少单独使用static声明变量。
* 静态变量在第一次被访问时创建，在程序结束时销毁。
* 与实例变量具有相似的可见性。但为了对类的使用者可见，大多数静态变量声明为public类型。
* 默认值和实例变量相似。数值型变量默认值是0，布尔型默认值是false，引用类型默认值是null。变量的值可以在声明的时候指定，也可以在构造方法中指定。此外，静态变量还可以在静态语句块中初始化。
* 静态变量可以通过：ClassName.VariableName的方式访问。
* 类变量被声明为public static final类型时，类变量名称一般建议使用大写字母。如果静态变量不是public和final类型，其命名方式与实例变量以及局部变量的命名方式一致。


---
### Java 修饰符
Java语言提供了很多修饰符，主要分为以下两类：

* 访问修饰符
* 非访问修饰符

修饰符用来定义类、方法或者变量，通常放在语句的最前端。我们通过下面的例子来说明：

```
public class className {
   // ...
}
private boolean myFlag;
static final double weeks = 9.5;
protected static final int BOXWIDTH = 42;
public static void main(String[] arguments) {
   // 方法体
}
```
##### 访问控制修饰符
Java中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。Java 支持 4 种不同的访问权限。
* default (即缺省，什么也不写）:在同一包内可见，不使用任何修饰符。使用对象：类、接口、变量、方法。
* private : 在同一类内可见。使用对象：变量、方法。 注意：不能修饰类（外部类）
* public : 对所有类可见。使用对象：类、接口、变量、方法
* protected : 对同一包内的类和所有子类可见。使用对象：变量、方法。 注意：不能修饰类（外部类）。

![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/2.png?raw=true)


##### 私有访问修饰符-private
私有访问修饰符是最严格的访问级别，所以被声明为private的方法、变量和构造方法只能被所属类访问，并且类和接口不能声明为 private。

声明为私有访问类型的变量只能通过类中公共的 getter 方法被外部类访问。

Private 访问修饰符的使用主要用来隐藏类的实现细节和保护类的数据。

下面的类使用了私有访问修饰符：


```
public class Logger {
   private String format;
   public String getFormat() {
      return this.format;
   }
   public void setFormat(String format) {
      this.format = format;
   }
}
```

#### 公有访问修饰符-public
被声明为 public 的类、方法、构造方法和接口能够被任何其他类访问。

如果几个相互访问的 public 类分布在不同的包中，则需要导入相应 public 类所在的包。由于类的继承性，类所有的公有方法和变量都能被其子类继承。

以下函数使用了公有访问控制：


```
public static void main(String[] arguments) {
   // ...
}
```

Java 程序的 main() 方法必须设置成公有的，否则，Java 解释器将不能运行该类。

#### 受保护的访问修饰符-protected
protected 需要从以下两个点来分析说明：

* 子类与基类在同一包中：被声明为protected的变量、方法和构造器能被同一个包中的任何其他类访问；

* 子类与基类不在同一包中：那么在子类中，子类实例可以访问其从基类继承而来的protected方法，而不能访问基类实例的protected方法。

* protected 可以修饰数据成员，构造方法，方法成员，不能修饰类（内部类除外）

#### 访问控制和继承
请注意以下方法继承的规则：

* 父类中声明为 public 的方法在子类中也必须为 public。
* 父类中声明为protected的方法在子类中要么声明为protected，要么声明为public，不能声明为 private。
* 父类中声明为 private 的方法，不能够被继承。

#### 非访问修饰符
为了实现一些其他的功能，Java 也提供了许多非访问修饰符。

* static 修饰符，用来修饰类方法和类变量。
* final 修饰符，用来修饰类、方法和变量，final修饰的类不能够被继承，修饰的方法不能被继承类重新定义，修饰的变量为常量，是不可修改的。
* abstract 修饰符，用来创建抽象类和抽象方法。
* synchronized 和 volatile 修饰符，主要用于线程的编程。

#### static 修饰符
* 静态变量：

static 关键字用来声明独立于对象的静态变量，无论一个类实例化多少对象，它的静态变量只有一份拷贝。 静态变量也被称为类变量。局部变量不能被声明为 static 变量。

* 静态方法：

static 关键字用来声明独立于对象的静态方法。静态方法不能使用类的非静态变量。静态方法从参数列表得到数据，然后计算这些数据。

对类变量和方法的访问可以直接使用 classname.variablename 和 classname.methodname 的方式访问。

#### final 修饰符
* final 变量：
final 表示"最后的、最终的"含义，变量一旦赋值后，不能被重新赋值。被final修饰的实例变量必须显式指定初始值。
final 修饰符通常和static修饰符一起使用来创建类常量。
* final 方法
类中的final方法可以被子类继承，但是不能被子类修改。声明 final 方法的主要目的是防止该方法的内容被修改。

#### abstract 修饰符
##### 抽象类：
* 抽象类不能用来实例化对象，声明抽象类的唯一目的是为了将来对该类进行扩充。
* 一个类不能同时被abstract和final修饰。如果一个类包含抽象方法，那么该类一定要声明为抽象类，否则将出现编译错误。
* 抽象类可以包含抽象方法和非抽象方法。

##### 抽象方法：
* 抽象方法是一种没有任何实现的方法，该方法的的具体实现由子类提供。
* 抽象方法不能被声明成 final 和 static。
* 任何继承抽象类的子类必须实现父类的所有抽象方法，除非该子类也是抽象类。
* 如果一个类包含若干个抽象方法，那么该类必须声明为抽象类。抽象类可以不包含抽象方法。
* 抽象方法的声明以分号结尾，例如：public abstract sample();。

##### synchronized 修饰符
synchronized 关键字声明的方法同一时间只能被一个线程访问。synchronized 修饰符可以应用于四个访问修饰符。

Java 教程
Java 教程
Java 简介
Java 开发环境配置
Java 基础语法
Java 对象和类
Java 基本数据类型
Java 变量类型
Java 修饰符
Java 运算符
Java 循环结构
Java 条件语句
Java switch case
Java Number & Math 类
Java Character 类
Java String 类
Java StringBuffer
Java 数组
Java 日期时间
Java 正则表达式
Java 方法
Java Stream、File、IO
Java Scanner 类
Java 异常处理

Java 面向对象
Java 继承
Java Override/Overload
Java 多态
Java 抽象类
Java 封装
Java 接口
Java 包(package)

Java 高级教程
Java 数据结构
Java 集合框架
Java 泛型
Java 序列化
Java 网络编程
Java 发送邮件
Java 多线程编程
Java Applet 基础
Java 文档注释
Java 实例
Java 8 新特性
Java MySQL 连接
Java 9 新特性
 Java 变量类型 Java 运算符 
Java 修饰符
Java语言提供了很多修饰符，主要分为以下两类：

访问修饰符
非访问修饰符
修饰符用来定义类、方法或者变量，通常放在语句的最前端。我们通过下面的例子来说明：

public class className {
   // ...
}
private boolean myFlag;
static final double weeks = 9.5;
protected static final int BOXWIDTH = 42;
public static void main(String[] arguments) {
   // 方法体
}
访问控制修饰符
Java中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。Java 支持 4 种不同的访问权限。

default (即缺省，什么也不写）: 在同一包内可见，不使用任何修饰符。使用对象：类、接口、变量、方法。

private : 在同一类内可见。使用对象：变量、方法。 注意：不能修饰类（外部类）

public : 对所有类可见。使用对象：类、接口、变量、方法

protected : 对同一包内的类和所有子类可见。使用对象：变量、方法。 注意：不能修饰类（外部类）。

我们可以通过以下表来说明访问权限：

访问控制
修饰符	当前类	同一包内	子孙类(同一包)	子孙类(不同包)	其他包
public	Y	Y	Y	Y	Y
protected	Y	Y	Y	Y/N（说明）	N
default	Y	Y	Y	N	N
private	Y	N	N	N	N
默认访问修饰符-不使用任何关键字
使用默认访问修饰符声明的变量和方法，对同一个包内的类是可见的。接口里的变量都隐式声明为 public static final,而接口里的方法默认情况下访问权限为 public。

如下例所示，变量和方法的声明可以不使用任何修饰符。

实例
String version = "1.5.1";
boolean processOrder() {
   return true;
}
私有访问修饰符-private
私有访问修饰符是最严格的访问级别，所以被声明为 private 的方法、变量和构造方法只能被所属类访问，并且类和接口不能声明为 private。

声明为私有访问类型的变量只能通过类中公共的 getter 方法被外部类访问。

Private 访问修饰符的使用主要用来隐藏类的实现细节和保护类的数据。

下面的类使用了私有访问修饰符：

public class Logger {
   private String format;
   public String getFormat() {
      return this.format;
   }
   public void setFormat(String format) {
      this.format = format;
   }
}
实例中，Logger 类中的 format 变量为私有变量，所以其他类不能直接得到和设置该变量的值。为了使其他类能够操作该变量，定义了两个 public 方法：getFormat() （返回 format的值）和 setFormat(String)（设置 format 的值）

公有访问修饰符-public
被声明为 public 的类、方法、构造方法和接口能够被任何其他类访问。

如果几个相互访问的 public 类分布在不同的包中，则需要导入相应 public 类所在的包。由于类的继承性，类所有的公有方法和变量都能被其子类继承。

以下函数使用了公有访问控制：

public static void main(String[] arguments) {
   // ...
}
Java 程序的 main() 方法必须设置成公有的，否则，Java 解释器将不能运行该类。

受保护的访问修饰符-protected
protected 需要从以下两个点来分析说明：

子类与基类在同一包中：被声明为 protected 的变量、方法和构造器能被同一个包中的任何其他类访问；

子类与基类不在同一包中：那么在子类中，子类实例可以访问其从基类继承而来的 protected 方法，而不能访问基类实例的protected方法。

protected 可以修饰数据成员，构造方法，方法成员，不能修饰类（内部类除外）。

接口及接口的成员变量和成员方法不能声明为 protected。 可以看看下图演示：



子类能访问 protected 修饰符声明的方法和变量，这样就能保护不相关的类使用这些方法和变量。

下面的父类使用了 protected 访问修饰符，子类重写了父类的 openSpeaker() 方法。

class AudioPlayer {
   protected boolean openSpeaker(Speaker sp) {
      // 实现细节
   }
}
 
class StreamingAudioPlayer extends AudioPlayer {
   protected boolean openSpeaker(Speaker sp) {
      // 实现细节
   }
}
如果把 openSpeaker() 方法声明为 private，那么除了 AudioPlayer 之外的类将不能访问该方法。

如果把 openSpeaker() 声明为 public，那么所有的类都能够访问该方法。

如果我们只想让该方法对其所在类的子类可见，则将该方法声明为 protected。

protected 是最难理解的一种 Java 类成员访问权限修饰词，更多详细内容请查看 Java protected 关键字详解。

访问控制和继承
请注意以下方法继承的规则：

父类中声明为 public 的方法在子类中也必须为 public。

父类中声明为 protected 的方法在子类中要么声明为 protected，要么声明为 public，不能声明为 private。

父类中声明为 private 的方法，不能够被继承。

非访问修饰符
为了实现一些其他的功能，Java 也提供了许多非访问修饰符。

static 修饰符，用来修饰类方法和类变量。

final 修饰符，用来修饰类、方法和变量，final 修饰的类不能够被继承，修饰的方法不能被继承类重新定义，修饰的变量为常量，是不可修改的。

abstract 修饰符，用来创建抽象类和抽象方法。

synchronized 和 volatile 修饰符，主要用于线程的编程。

static 修饰符
静态变量：

static 关键字用来声明独立于对象的静态变量，无论一个类实例化多少对象，它的静态变量只有一份拷贝。 静态变量也被称为类变量。局部变量不能被声明为 static 变量。

静态方法：

static 关键字用来声明独立于对象的静态方法。静态方法不能使用类的非静态变量。静态方法从参数列表得到数据，然后计算这些数据。

对类变量和方法的访问可以直接使用 classname.variablename 和 classname.methodname 的方式访问。

如下例所示，static修饰符用来创建类方法和类变量。

public class InstanceCounter {
   private static int numInstances = 0;
   protected static int getCount() {
      return numInstances;
   }
 
   private static void addInstance() {
      numInstances++;
   }
 
   InstanceCounter() {
      InstanceCounter.addInstance();
   }
 
   public static void main(String[] arguments) {
      System.out.println("Starting with " +
      InstanceCounter.getCount() + " instances");
      for (int i = 0; i < 500; ++i){
         new InstanceCounter();
          }
      System.out.println("Created " +
      InstanceCounter.getCount() + " instances");
   }
}
以上实例运行编辑结果如下:

Starting with 0 instances
Created 500 instances
final 修饰符
final 变量：

final 表示"最后的、最终的"含义，变量一旦赋值后，不能被重新赋值。被 final 修饰的实例变量必须显式指定初始值。

final 修饰符通常和 static 修饰符一起使用来创建类常量。

实例
public class Test{
  final int value = 10;
  // 下面是声明常量的实例
  public static final int BOXWIDTH = 6;
  static final String TITLE = "Manager";
 
  public void changeValue(){
     value = 12; //将输出一个错误
  }
}
final 方法

类中的 final 方法可以被子类继承，但是不能被子类修改。

声明 final 方法的主要目的是防止该方法的内容被修改。

如下所示，使用 final 修饰符声明方法。

public class Test{
    public final void changeName(){
       // 方法体
    }
}
final 类

final 类不能被继承，没有类能够继承 final 类的任何特性。

实例
public final class Test {
   // 类体
}
abstract 修饰符
抽象类：

抽象类不能用来实例化对象，声明抽象类的唯一目的是为了将来对该类进行扩充。

一个类不能同时被 abstract 和 final 修饰。如果一个类包含抽象方法，那么该类一定要声明为抽象类，否则将出现编译错误。

抽象类可以包含抽象方法和非抽象方法。

实例
abstract class Caravan{
   private double price;
   private String model;
   private String year;
   public abstract void goFast(); //抽象方法
   public abstract void changeColor();
}
抽象方法

抽象方法是一种没有任何实现的方法，该方法的的具体实现由子类提供。

抽象方法不能被声明成 final 和 static。

任何继承抽象类的子类必须实现父类的所有抽象方法，除非该子类也是抽象类。

如果一个类包含若干个抽象方法，那么该类必须声明为抽象类。抽象类可以不包含抽象方法。

抽象方法的声明以分号结尾，例如：public abstract sample();。

实例
public abstract class SuperClass{
    abstract void m(); //抽象方法
}
 
class SubClass extends SuperClass{
     //实现抽象方法
      void m(){
          .........
      }
}
#### synchronized 修饰符
synchronized 关键字声明的方法同一时间只能被一个线程访问。synchronized修饰符可以应用于四个访问修饰符。

实例
public synchronized void showDetails(){
.......
}
#### transient 修饰符
序列化的对象包含被 transient 修饰的实例变量时，java 虚拟机(JVM)跳过该特定的变量。

该修饰符包含在定义变量的语句中，用来预处理类和变量的数据类型。

#### volatile 修饰符
volatile 修饰的成员变量在每次被线程访问时，都强制从共享内存中重新读取该成员变量的值。而且，当成员变量发生变化时，会强制线程将变化值回写到共享内存。这样在任何时刻，两个不同的线程总是看到某个成员变量的同一个值。


---

### Java 运算符
* 算术运算符
* 关系运算符
* 位运算符
* 逻辑运算符
* 赋值运算符
* 其他运算符

#### 算术运算符
#### 关系运算符
#### 位运算符

#### 逻辑运算符
#### 短路逻辑运算符
#### 赋值运算符

#### 条件运算符（?:）
条件运算符也被称为三元运算符。
#### instanceof 运算符
该运算符用于操作对象实例，检查该对象是否是一个特定类型（类类型或接口类型）。
#### Java运算符优先级
当多个运算符出现在一个表达式中，谁先谁后呢？这就涉及到运算符的优先级别的问题。
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/5.png?raw=true)


---
### Java 循环结构 - for, while 及 do...while

#### Java 增强 for 循环
Java5 引入了一种主要用于数组的增强型 for 循环。

```
for(声明语句 : 表达式)
{
   //代码句子
}
```

---
### Java Number & Math 类

#### Java Math 类
所有的包装类（Integer、Long、Byte、Double、Float、Short）都是抽象类 Number 的子类。

![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/6.png?raw=true)
这种由编译器特别支持的包装称为装箱，所以当内置数据类型被当作对象使用的时候，编译器会把内置类型装箱为包装类。相似的，编译器也可以把一个对象拆箱为内置类型。Number类属于java.lang包。

```
public class Test{
 
   public static void main(String args[]){
      Integer x = 5;
      x =  x + 10;
      System.out.println(x); 
   }
}
15
```

赋值→装箱  运算→拆箱


#### Java Math 类
Java 的 Math 包含了用于执行基本数学运算的属性和方法，如初等指数、对数、平方根和三角函数。Math 的方法都被定义为 static 形式，通过 Math 类可以在主函数中直接调用。

#### Number & Math 类方法
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/7.png?raw=true)
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/8.png?raw=true)
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/9.png?raw=true)
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/9.png?raw=true)
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/10.png?raw=true) 



```
/**
* @author Dale
* java中的自动装箱与拆箱
* 简单一点说，装箱就是自动将基本数据类型转换为包装器类型；拆箱就是自动将包装器类型转换为基本数据类型。
*/
public class Number {
    public static void main(String[] args) {
        /**
        Integer i1 = 128;  // 装箱，相当于 Integer.valueOf(128);
        int t = i1; //相当于 i1.intValue() 拆箱
        System.out.println(t);
        */

        /**
        对于–128到127（默认是127）之间的值,被装箱后，会被放在内存里进行重用
        但是如果超出了这个值,系统会重新new 一个对象
        */
        Integer i1 = 200;
        Integer i2 = 200;

        /**
        注意 == 与 equals的区别
        == 它比较的是对象的地址
        equals 比较的是对象的内容
        */
        if(i1==i2) {
            System.out.println("true");
        } else {
            System.out.println("false");
        }
    }
}
```

#### Java Character 类
Character 类用于对单个字符进行操作。
Character 类在对象中包装一个基本类型 char 的值

---
#### Java String 类
字符串广泛应用 在Java 编程中，在 Java 中**字符串属于对象**，Java 提供了 String 类来创建和操作字符串。

tring 类有 11 种构造方法，这些方法提供不同的参数来初始化字符串，比如提供一个字符数组参数:

```
public class StringDemo{
   public static void main(String args[]){
      char[] helloArray = { 'r', 'u', 'n', 'o', 'o', 'b'};
      String helloString = new String(helloArray);  
      System.out.println( helloString );
   }
}
```
**注意:String 类是不可改变的，所以你一旦创建了 String 对象，那它的值就无法改变了**

#### 字符串长度
用于获取有关对象的信息的方法称为访问器方法。
String 类的一个访问器方法是 length() 方法，它返回字符串对象包含的字符数。

#### 字符串长度

```
string1.concat(string2);
"我的名字是 ".concat("Runoob");
"Hello," + " runoob" + "!"
```
#### 创建格式化字符串
创建格式化字符串
我们知道输出格式化数字可以使用 printf() 和 format() 方法。

String 类使用静态方法 format() 返回一个String 对象而不是 PrintStream 对象。

String 类的静态方法 format() 能用来创建可复用的格式化字符串，而不仅仅是用于一次打印输出。

```
System.out.printf("浮点型变量的值为 " +
                  "%f, 整型变量的值为 " +
                  " %d, 字符串变量的值为 " +
                  "is %s", floatVar, intVar, stringVar);
```
#### String 方法

---

### Java StringBuffer 和 StringBuilder 类
当对字符串进行修改的时候，需要使用StringBuffer和StringBuilder类。

和 String 类不同的是，StringBuffer 和 StringBuilder 类的对象能够被多次的修改，并且不产生新的未使用对象。

StringBuilder 类在 Java 5 中被提出，它和 StringBuffer 之间的最大不同在于 StringBuilder 的方法不是线程安全的（不能同步访问）。

由于 StringBuilder 相较于 StringBuffer 有速度优势，所以多数情况下建议使用 StringBuilder 类。然而在应用程序要求线程安全的情况下，则必须使用 StringBuffer 类。

#### StringBuffer 方法

---
#### Java 数组

Java 语言中提供的数组是用来存储固定大小的同类型元素。

你可以声明一个数组变量，如 numbers[100] 来代替直接声明 100 个独立变量 number0，number1，....，number99。

#### 声明数组变量
首先必须声明数组变量，才能在程序中使用数组。下面是声明数组变量的语法：

```
dataType[] arrayRefVar;   // 首选的方法

dataType arrayRefVar[];  // 效果相同，但不是首选方法
```
#### 创建数组

Java语言使用new操作符来创建数组，语法如下：

```
arrayRefVar = new dataType[arraySize];
```
上面的语法语句做了两件事：
* 使用 dataType[arraySize] 创建了一个数组。
* 把新创建的数组的引用赋值给变量arrayRefVar。

数组变量的声明，和创建数组可以用一条语句完成，如下所示：
```
dataType[] arrayRefVar = new dataType[arraySize];
```
另外，你还可以使用如下的方式创建数组。

```
dataType[] arrayRefVar = {value0, value1, ..., valuek};
```
#### 处理数组
数组的元素类型和数组的大小都是确定的，所以当处理数组元素时候，我们通常使用基本循环或者foreach循环。

#### 数组作为函数的参数
数组可以作为参数传递给方法。

例如，下面的例子就是一个打印 int 数组中元素的方法:

```
public static void printArray(int[] array) {
  for (int i = 0; i < array.length; i++) {
    System.out.print(array[i] + " ");
  }
}
printArray(new int[]{3, 1, 2, 6, 4, 2});

```
#### 数组作为函数的返回值

#### 多维数组

```
String str[][] = new String[3][4];

```

#### Arrays 类
java.util.Arrays 类能方便地操作数组，它提供的所有方法都是静态的。

具有以下功能：
*  给数组赋值：通过 fill 方法。
*  对数组排序：通过 sort 方法,按升序。
*  比较数组：通过 equals 方法比较数组中元素值是否相等。
*  查找数组元素：通过 binarySearch 方法能对排序好的数组进行二分查找法操作。


---
# Java 日期时间

java.util 包提供了 Date 类来封装当前的日期和时间。 Date 类提供两个构造函数来实例化 Date 对象。

第一个构造函数使用当前日期和时间来初始化对象。
```
Date( )
```
第二个构造函数接收一个参数，该参数是从1970年1月1日起的毫秒数。
```
Date(long millisec)
```
#### Java 休眠(sleep)
sleep()使当前线程进入停滞状态（阻塞当前线程），让出CPU的使用、目的是不让当前线程独自霸占该进程所获的CPU资源，以留一定时间给其他线程执行的机会。

#### Calendar类
#### GregorianCalendar类

---
### Java 正则表达式
正则表达式定义了字符串的模式。

**正则表达式可以用来搜索、编辑或处理文本。**

正则表达式并不仅限于某一种语言，但是在每种语言中有细微的差别。

---
