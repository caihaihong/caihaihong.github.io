### servlet介绍
Java Servlet 是运行在 **Web 服务器或应用服务器**上的**程序**，它是作为来自 Web 浏览器或其他 **HTTP 客户端的请求**和 HTTP 服务器上的数据库或应用程序之间的中间层
![image](http://www.runoob.com/wp-content/uploads/2014/07/servlet-arch.jpg)

##### Servlet 任务
* 读取客户端（浏览器）发送的显式的数据。这包括网页上的 HTML 表单。
* 读取客户端（浏览器）发送的隐式的 HTTP 请求数据。这包括 cookies。
* 处理数据并生成结果
* 发送显式的数据（即文档）到客户端（浏览器）
* 发送隐式的 HTTP 响应到客户端（浏览器）

##### Servlet 包
Java Servlet 是运行在带有支持 Java Servlet 规范的解释器的 web 服务器上的 Java 类。

##### Servlet 生命周期
* Servlet 通过调用init()方法进行初始化
  * 当用户调用一个 Servlet 时，就会创建一个 Servlet 实例，每一个用户请求都会产生一个新的线程，适当的时候移交给 doGet 或 doPost 方法
  * init() 方法简单地创建或加载一些数据，这些数据将被用于 Servlet 的整个生命周期
    ```
     public void init() throws ServletException {
      // 初始化代码...
    }
    ```
* Servlet 调用service()方法来处理客户端的请求
  * service()方法是执行实际任务的主要方法。Servlet 容器（即 Web 服务器）调用 service() 方法来处理来自客户端（浏览器）的请求，并把格式化的响应写回给客户端。每次服务器接收到一个 Servlet 请求时，服务器会产生一个新的线程并调用服务。service() 方法检查 HTTP 请求类型（GET、POST、PUT、DELETE 等），并在适当的时候调用doGet、doPost、doPut，doDelete 等方法。
    ```
    public void service(ServletRequest request, 
                    ServletResponse response) 
      throws ServletException, IOException{
    }
    ```
* Servlet 通过调用destroy()方法终止（结束）