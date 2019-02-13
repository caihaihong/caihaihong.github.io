### Java 异常处理
异常是程序中的一些错误，但并不是所有的错误都是异常，并且错误有时候是可以避免的。

比如说，你的代码少了一个分号，那么运行出来结果是提示是错误 java.lang.Error；如果你用System.out.println(11/0)，那么你是因为你用0做了除数，会抛出 java.lang.ArithmeticException 的异常。

#### 异常发生的原因通常包含以下几大类：
* 用户输入了非法数据。
* 要打开的文件不存在。
* 网络通信时连接中断，或者JVM内存溢出。
* 这些异常有的是因为用户错误引起，有的是程序错误引起的，还有其它一些是因为物理错误引起的。

#### 要理解Java异常处理是如何工作的，需要掌握以下三种类型的异常：

* 检查性异常：最具代表的检查性异常是用户错误或问题引起的异常，这是程序员无法预见的。例如要打开一个不存在文件时，一个异常就发生了，这些异常在编译时不能被简单地忽略。
* 运行时异常： 运行时异常是可能被程序员避免的异常。与检查性异常相反，运行时异常可以在编译时被忽略。
* 错误： 错误不是异常，而是脱离程序员控制的问题。错误在代码中通常被忽略。例如，当栈溢出时，一个错误就发生了，它们在编译也检查不到的。

#### Exception 类的层次
* 所有的异常类是从 java.lang.Exception 类继承的子类。
* Exception 类是 Throwable 类的子类。除了Exception类外，Throwable还有一个子类Error 。
* Java 程序通常不捕获错误。错误一般发生在严重故障时，它们在Java程序处理的范畴之外。
* Error 用来指示运行时环境发生的错误。

例如，JVM 内存溢出。一般地，程序不会从错误中恢复。

#### 异常类有两个主要的子类：IOException 类和 RuntimeException 类。
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/16.jpg?raw=true)

#### Java 内置异常类
Java 语言定义了一些异常类在 java.lang 标准包中。

标准运行时异常类的子类是最常见的异常类。由于 java.lang 包是默认加载到所有的 Java 程序的，所以大部分从运行时异常类继承而来的异常都可以直接使用。

##### Java 根据各个类库也定义了一些其他的异常，下面的表中列出了 Java 的非检查性异常。
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/16.png?raw=true)
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/17.png?raw=true)

##### 下面的表中列出了 Java 定义在 java.lang 包中的检查性异常类。
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/18.png?raw=true) 


#### 异常方法
##### 下面的列表是 Throwable 类的主要方法:
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/19.png?raw=true) 

#### 捕获异常

使用 try 和 catch 关键字可以捕获异常。try/catch 代码块放在异常可能发生的地方。

**try/catch代码块中的代码称为保护代码**，使用 try/catch 的语法如下：


```
try
{
   // 程序代码
}catch(ExceptionName e1)
{
   //Catch 块
}
```

* Catch 语句包含要捕获异常类型的声明。当保护代码块中发生一个异常时，try 后面的 catch 块就会被检查。

* 如果发生的异常包含在catch块中，异常会被传递到该catch块，这和传递一个参数到方法是一样。

#### 多重捕获块
一个 try 代码块后面跟随多个 catch 代码块的情况就叫多重捕获。

```
try{
   // 程序代码
}catch(异常类型1 异常的变量名1){
  // 程序代码
}catch(异常类型2 异常的变量名2){
  // 程序代码
}catch(异常类型2 异常的变量名2){
  // 程序代码
}
```
上面的代码段包含了 3 个 catch块。

可以在 try 语句后面添加任意数量的 catch 块。

如果保护代码中发生异常，异常被抛给第一个 catch 块。

如果抛出异常的数据类型与 ExceptionType1 匹配，它在这里就会被捕获。

如果不匹配，它会被传递给第二个 catch 块。

如此，直到异常被捕获或者通过所有的 catch 块。

#### throws/throw 关键字：

如果一个方法没有捕获到一个检查性异常，那么该方法必须使用throws关键字来声明。throws 关键字放在方法签名的尾部。

也可以使用 throw 关键字抛出一个异常，无论它是新实例化的还是刚捕获到的。

下面方法的声明抛出一个 RemoteException 异常：


```
import java.io.*;
public class className
{
  public void deposit(double amount) throws RemoteException
  {
    // Method implementation
    throw new RemoteException();
  }
  //Remainder of class definition
}
```

一个方法可以声明抛出多个异常，多个异常之间用逗号隔开。

例如，下面的方法声明抛出 RemoteException 和 InsufficientFundsException：


```
import java.io.*;
public class className
{
   public void withdraw(double amount) throws RemoteException,
                              InsufficientFundsException
   {
       // Method implementation
   }
   //Remainder of class definition
}
```

#### finally关键字
finally 关键字用来创建在 try 代码块后面执行的代码块。

无论是否发生异常，finally 代码块中的代码总会被执行。

在 finally 代码块中，可以运行清理类型等收尾善后性质的语句。

finally 代码块出现在 catch 代码块最后，语法如下：

```
try{
  // 程序代码
}catch(异常类型1 异常的变量名1){
  // 程序代码
}catch(异常类型2 异常的变量名2){
  // 程序代码
}finally{
  // 程序代码
}
```

#### 注意下面事项：
* catch 不能独立于 try 存在。
* 在 try/catch 后面添加 finally 块并非强制性要求的。
* try 代码后不能既没 catch 块也没 finally 块。
* try, catch, finally 块之间不能添加任何代码。

#### 声明自定义异常
在 Java 中你可以自定义异常。编写自己的异常类时需要记住下面的几点。
* 所有异常都必须是 Throwable 的子类。
* 如果希望写一个检查性异常类，则需要继承 Exception 类。
* 如果你想写一个运行时异常类，那么需要继承 RuntimeException 类。

```
class MyException extends Exception{
}
```
只继承Exception 类来创建的异常类是检查性异常类。

下面的 InsufficientFundsException 类是用户定义的异常类，它继承自 Exception。

一个异常类和其它任何类一样，包含有变量和方法。

#### 通用异常
* JVM(Java虚拟机) 异常：由 JVM 抛出的异常或错误。例如：NullPointerException 类，ArrayIndexOutOfBoundsException 类，ClassCastException 类。
* 程序级异常：由程序或者API程序抛出的异常。例如 IllegalArgumentException 类，IllegalStateException 类。
* 

### 笔记
#### 名词解释
* 检查性异常: 错误不处理，不能通过编译
* 非检查性异常:不处理编译可以通过，如果有抛出直接抛到控制台
* 运行时异常: 就是非检查性异常
* 非运行时异常: 就是检查性异常

#### 异常使用可遵循下面的原则：
* 在当前方法被覆盖时，覆盖他的方法必须抛出相同的异常或异常的子类；
* 在当前方法声明中使用try-catch语句捕获异常；
* 如果父类抛出多个异常，则覆盖方法必须抛出那些异常的一个子集，不能抛出新异常。

![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/20.png?raw=true)


如图可以看出所有的异常跟错误都继承与Throwable类，也就是说所有的异常都是一个对象。

##### 从大体来分异常为两块：
* error---错误 ： 是指程序无法处理的错误，表示应用程序运行时出现的重大错误。例如jvm运行时出现的OutOfMemoryError以及Socket编程时出现的端口占用等程序无法处理的错误。
* Exception --- 异常 ：
  * **运行时异常**
  * **编译异常**

1. 运行时异常：即RuntimeException及其之类的异常。这类异常在代码编写的时候不会被编译器所检测出来，是可以不需要被捕获，但是程序员也可以根据需要进行捕获抛出。常见的RUNtimeException有：NullpointException（空指针异常），ClassCastException（类型转换异常），IndexOutOfBoundsException（数组越界异常）等。
2. 编译异常：RuntimeException以外的异常。这类异常在编译时编译器会提示需要捕获，如果不进行捕获则编译错误。常见编译异常有：IOException（流传输异常），SQLException（数据库操作异常）等。
3. java处理异常的机制：抛出异常以及捕获异常，一个方法所能捕捉的异常，一定是Java代码在某处所抛出的异常。简单地说，**异常总是先被抛出，后被捕捉的**。

##### throw跟throws的区别:


```
public void test() throws Exception {
    throw new Exception();
}
```

throws表示一个方法声明可能抛出一个异常，throw表示此处抛出一个已定义的异常（可以是自定义需继承Exception，也可以是java自己给出的异常类）。

#### Java看一下如何捕获异常：

1）首先java对于异常捕获使用的是try---catch或try --- catch --- finally 代码块，程序会捕获try代码块里面的代码，若捕获到异常则进行catch代码块处理。若有finally则在catch处理后执行finally里面的代码。然而存在这样两个问题：

a.看如下代码：


```
try{
    //待捕获代码
}catch（Exception e）{
    System.out.println("catch is begin");
    return 1 ；
}finally{
     System.out.println("finally is begin");
}
```

在catch里面有一个return，那么finally会不会被执行呢？答案是肯定的，上面代码的执行结果为：


```
catch is begin
finally is begin
```
 
也就是说会先执行catch里面的代码后执行finally里面的代码最后才return1 ；

b.看如下代码：


```
try{
   //待捕获代码    
}catch（Exception e）{
    System.out.println("catch is begin");
    return 1 ；
}finally{
     System.out.println("finally is begin");
     return 2 ;
}
```

在b代码中输出结果跟a是一样的，然而返回的是return 2 ； 原因很明显，就是执行了finally后已经return了，所以catch里面的return不会被执行到。也就是说finally永远都会在catch的return前被执行。

 **对于异常的捕获不应该觉得方便而将几个异常合成一个Exception进行捕获，比如有IO的异常跟SQL的异常，这样完全不同的两个异常应该分开处理！而且在catch里处理异常的时候不要简单的e.printStackTrace()，而是应该进行详细的处理。比如进行console打印详情或者进行日志记录。**

**注意：异常和错误的区别：异常能被程序本身可以处理，错误是无法处理。**

#### Java 语言定义了一些异常类在 java.lang 标准包中。标准运行时异常类的子类是最常见的异常类。由于 java.lang 包是默认加载到所有的 Java 程序的，所以大部分从运行时异常类继承而来的异常都可以直接使用。

#### throws 用在函数上，声明该函数的功能可能会出现问题。

将异常抛出，是问题暴露出来，用于处理。

可以抛给虚拟机处理，或者使用 try....catch... 进行处理。虚拟机的处理方式，就是将异常打印出来，并且将在异常处的代码终止。

throw 用在代码块中，后面跟着异常的对象，该对象可以是自定义异常，且 throw 使用在方法中。

```
class FuShuException extends Exception //getMessage();
{
    private int value;
    FuShuException()
    {
        super();
    }
    FuShuException(String msg,int value)
    {
        super(msg);
        this.value = value;
    }
    public int getValue()
    {
        return value;
    }
}

class Demo
{
    int div(int a,int b)throws FuShuException
    {
        if(b<0) {
             // 手动通过throw关键字抛出一个自定义异常对象。
            throw new FuShuException("出现了除数是负数的情况------ / by fushu",b);
        }
        return a/b;
    }
}

class  ExceptionDemo3
{
    public static void main(String[] args)
    {
        Demo d = new Demo();
        try
        {
            int x = d.div(4,-9);
            System.out.println("x="+x);
        }
        catch (FuShuException e)
        {
            System.out.println(e.toString());
            //System.out.println("除数出现负数了");
            System.out.println("错误的负数是："+e.getValue());
        }
        System.out.println("over");
    }
}
```

throws 用于方法上，可抛出多个异常，每个异常的类名用逗号隔开。

try...catch.... 捕获异常时，大的异常(Exception类)放在下方，小的异常放在上方，否则，在异常捕获时，小的异常将不能被捕获，因为全在大的异常类中捕获到。

即: 如果多个 catch 块中的异常出现继承关系，父类异常 catch 块放在最下面。

处理异常的方式，不可以直接打印，或者直接输出,正确的处理方式:

 1.根据异常情况处理对应的逻辑
 2.使用文件记录异常,便于日后查看

```
class FuShuException extends Exception
{
    private int value;

    FuShuException() {
        super();
    }

    FuShuException(String msg, int value) {
        super(msg);//调用父类有参构造,获得异常信息
        this.value = value;
    }

    public int getValue() {
        return value;
    }

}

class Demo {
    int div(int a, int b) throws FuShuException {
        if (b < 0)
            throw new FuShuException("出现了除数是负数的情况by fushu", b);// 手动通过throw关键字抛出一个自定义异常对象。
        return a / b;
    }
}

public class MyT {
    public static void main(String[] args) {
        Demo d = new Demo();
        try {
            int x = d.div(4, -9);
            System.out.println("x=" + x);
        } catch (FuShuException e) {
            System.out.println(e.toString());
            System.out.println("错误的负数是：" + e.getValue());
        }catch (Exception e) {//大的异常放在下方,小的异常放在上方
            System.out.println(e.getMessage());
        }

        System.out.println("end");

    }
}
```

1.检查型异常（Checked Exception）

个人理解：所谓检查（Checked）是指编译器要检查这类异常，检查的目的一方面是因为该类异常的发生难以避免，另一方面就是让开发者去解决掉这类异常，所以称为必须处理（try ...catch）的异常。如果不处理这类异常，集成开发环境中的编译器一般会给出错误提示。

例如：一个读取文件的方法代码逻辑没有错误，但程序运行时可能会因为文件找不到而抛出FileNotFoundException，如果不处理这些异常，程序将来肯定会出错。所以编译器会提示你要去捕获并处理这种可能发生的异常，不处理就不能通过编译。
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/21.png?raw=true)

2.非检查型异常（Unchecked Exception）

个人理解：所谓非检查（Unchecked）是指编译器不会检查这类异常，不检查的则开发者在代码的编辑编译阶段就不是必须处理，这类异常一般可以避免，因此无需处理（try ...catch）。如果不处理这类异常，集成开发环境中的编译器也不会给出错误提示。

例如：你的程序逻辑本身有问题，比如数组越界、访问null对象，这种错误你自己是可以避免的。编译器不会强制你检查这种异常。
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/java/22.png?raw=true)


