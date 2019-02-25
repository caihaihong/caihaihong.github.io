#### 翻译：在浏览器导航栏输入一个url后，发生了什么？

作为一名软件开发人员，关于网站应用的工作原理以及其中涉及到的技术：包括浏览器、HTTP、web server、请求处理等等，你一定有一个清晰的画面。

##### 过程

1. 你在浏览器输入一个url（www.baidu.com）

![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/broswer/10.png?raw=true)

2. 浏览器对输入的网站域名查找相应的ip地址

![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/broswer/11.png?raw=true)

###### 导航栏的第一步工作是去获取访问域名所对应的ip地址，DNS的查找过程如下：
 * **浏览器缓存**---浏览器会缓存DNS域名解析记录一段时间。有趣的是,操作系统不会告诉浏览器每一个NDS缓存的存活时间，所以浏览器浏览器只会缓存它们一小段固定时间（不同浏览器有所不同，一般是2-30分钟）
 * **OS操作系统缓存**---如果浏览器缓存不存在想要的ip记录，浏览器会通知操作系统（在window系统是通过gethostbyname）。操作系统有自己的一份缓存。
 * **路由器缓存**---请求会继续来到路由器，路由器有自己的缓存记录
 * **ISP(Internet Servive Provider)互联网服务商DNS缓存**---下一步查找是ISP的DNS缓存服务器。
 * **ISP DNS服务器进行递归查找**---你的ISP的DNS服务器开始了递归查找，从根域名服务器、通过顶级.com域名服务器，到baidu的域名服务器。很正常的，NDS服务器有.com域名服务器上的域名的缓存，所以到根服务器直接查找没有必要。
 
 ![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/broswer/12.png?raw=true) 
 
 
 ```
 有一件让人担心的事情就是关于DNS域名解析，那就是像“baicu.com”这样的完整的域名，好像只有单一的IP地址，幸运的是，这里有些缓和瓶颈的方式。
   * 轮询调度（Round-robin DNS）DNS是一种解决方案进行NDS域名解查找返回多个IP地址，比只有ip地址好。举个例子，facebook.com 实际上映射了4个IP地址。
   * 负载均衡（Load-balancer）是硬件上的用来监听某个特定的ip地址，对转发请求到另一台服务器。很多网站都会特别的使高性能的负载均衡器。
   * Geographic DNS（地理）通过获取客户端的地址位置，将域名映射到不同的IP地址，从而提高了可扩张性。
   这个对于呈现静态资源文件是很好的，这样不同的服务器不需要更新共享状态。
   * 任播（Anycast）是一种路径选择技术，对于单一的IP地址映射到多个物理服务器，很不幸，任播不适合TCP还有就是很少在在脚本使用。
   
 许多DNS服务器自身是使用传播是完成高效且低延迟的DNS查找
 
 ```

3. 浏览器发了一个HTTP   请求到web服务器

 
 ![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/broswer/13.png?raw=true) 
 
 你能够很确定facebook的主页不会由浏览器缓存提供，因为动态页面的过期也是非常快的或者立即的（过期时间设置为过去）
 所以浏览器会发以下这个请求到facebook服务器
 

```
GET http://facebook.com/ HTTP/1.1
Accept: application/x-ms-application, image/jpeg, application/xaml+xml, [...]
User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; [...]
Accept-Encoding: gzip, deflate
Connection: Keep-Alive
Host: facebook.com
Cookie: datr=1265876274-[...]; locale=en_US; lsd=WW[...]; c_user=2101[...]
```

Get请求去获取‘htt p://facebook.com/’，浏览器对自己做了标识，对服务器进行身份表明（user agent header）。还有声明什么类型的返回内容将会被接受（Accept and Accept-Encoding headers）。请求头请求服务器保持TCP连接的打开以实现后续的请求。

这个请求也包含浏览器与该域名对应的cookies。或许你已经知道，cookies是跟踪一个网站在不同的网页请求的键值对。cookies存储了登陆的用户名，一个私密数字联系到用户通过服务器，一些用户的设置等等。Cookies会被保存在客户端的某个文件里面，每个请求都会将cookies发送到服务器。



> 有很多种工具可以让你看到原生的HTTP requests请求，还有对应的responses返回。用来查看原生HTTP请求，我最喜欢的工具是fiddler,但是有很多其他的工具例如FireBug。这些工具都很好对于优化站点。
> 
> 对于GETQ请求之外，另外一种类型的请求或许你很熟悉，那就是POST请求，典型的使用就是提交表单。一个get请求通过URL发送它的请求参数（例如：htt p://robozzle.com/puzzle.aspx?id=85）。一个POST请求在请求体添加请求参数并且发送，就是在请求头下。
> 
> 跟随在URL"htt p://facebook.com/"的反斜杠是非常重要的，在这种情况，浏览器可以很安全的添加斜杠。对于“htt p://example.com/folderOrFile”这样的URL形式，浏览器不能自动地添加反斜杠，因为它不确定这个“folderOrFile”是个目录还是个文件。对于这种情况，浏览器就会访问这个网站不加反斜杠，那么服务器就会返回一个重定向，导致没有必要的往返。

4. FaceBoo 服务器返回一个永久重定向

 ![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/broswer/14.png?raw=true) 
 
 这是一个来自Facebook的服务器的返回给浏览器请求的结果

```
HTTP/1.1 301 Moved Permanently
Cache-Control: private, no-store, no-cache, must-revalidate, post-check=0,
      pre-check=0
Expires: Sat, 01 Jan 2000 00:00:00 GMT
Location: http://www.facebook.com/
P3P: CP="DSP LAW"
Pragma: no-cache
Set-Cookie: made_write_conn=deleted; expires=Thu, 12-Feb-2009 05:09:50 GMT;
      path=/; domain=.facebook.com; httponly
Content-Type: text/html; charset=utf-8
X-Cnection: close
Date: Fri, 12 Feb 2010 05:09:51 GMT
Content-Length: 0
```

这个服务返回一个返回码301告诉浏览器访问“http://www.facebook.com/”而不是“http://facebook.com/”。
> 
> 这里有趣的内容为什么服务器坚持重定向，而不是立即返回用户想要看到的页面。
> 有一个理由就是关于搜索引擎排名，看，如果有两个不同的URL访问同一个网页，说http://www.igoro.com/ 还有 http://igoro.com/, 搜索引擎会认为它们是两个不同的网站，每个都是低收入链接和那么低的排名吗，搜索引擎明白永久重定向（301），然后会结合两个不同来源的传入到同一个排名。
> 还有，相同的内容有多个URL对缓存不是很友好。当有一部分内容有多个名字，他将会潜在存在多次在缓存。


5. 浏览器跟随重定向


 ![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/broswer/15.png?raw=true)
 
 浏览器知道“htt p://www.facebook.com/”才是正确的地址，就进行了再次访问请求
 

```
GET http://www.facebook.com/ HTTP/1.1
Accept: application/x-ms-application, image/jpeg, application/xaml+xml, [...]
Accept-Language: en-US
User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; [...]
Accept-Encoding: gzip, deflate
Connection: Keep-Alive
Cookie: lsd=XW[...]; c_user=21[...]; x-referer=[...]
Host: www.facebook.com
```
请求的头部跟第一次是一样的。

6. 服务器处理请求

 ![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/broswer/16.png?raw=true)  
 
 服务器将会收到一个get请求，对他进行处理，然后返回respones
 
这个看起来是一项直截了当的任务，但其实实际上这里有很多有趣的工作发生。即使在 一个简单的个人博客网站，更别说在一个超大型的网站像Facebook。

* Web服务软件

Web服务软件（Apache IIS）接受HTTP请求还有决定用什么请求处理工具来处理本次请求，一个请求处理工具是一个项目（ASP,.NET,PHP,Ruby,...）读取请求然后生成返回HTML。

在最简单的情况，请求处理工具能够被存储在一个映射URLs结构的文件层次结构。举个例子 htt p://example.com/folder1/page1.aspx URL 将会映射到文件/httpdocs/folder1/page1.aspx。web服务软件也能够被配置以至于URLs能够手动映射到请求处理工具，所以对于page.aspx的公共URL能偶写成：“ht tp://example.com/folder1/page1”

* 请求处理工具

请求处理工具获取HTTP请求,请求参数，cookies。它可能读取请求还可能更新一些存储在服务器的数据。然后请求处理工具会生成返回一个HTML

> 有一个有趣的难题是每个动态网站遇到的关于如何保存数据。小一点的网站经常会有一个单一的SQL数据库去保存数据，但是网站保存一个巨大数量的数据或者有很多访问者就不得不在多台服务器之间分离数据库。解决方案主要有：分片sharding（基于主键在多个数据库之间分离数据表），复制replication，还有使用弱化一致性语义的简化数据库。
> 
> 延时一些处理进行批量处理是可以让更新数据比较低性能消耗的技术。


7. 服务返回一个HTML respones

 ![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/broswer/17.png?raw=true)  
 
 这是服务生成发回的。
 

```
HTTP/1.1 200 OK
Cache-Control: private, no-store, no-cache, must-revalidate, post-check=0,
    pre-check=0
Expires: Sat, 01 Jan 2000 00:00:00 GMT
P3P: CP="DSP LAW"
Pragma: no-cache
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
X-Cnection: close
Transfer-Encoding: chunked
Date: Fri, 12 Feb 2010 09:05:55 GMT
```

 整一个返回结果是36kb，the bulk of them in the byte blob at the end that I trimmed.（怎么翻译？）
 
 Content-Encoding头告诉浏览器返回体是使用gaip算法压缩的。解压文件，你就可以看到期待的HTML:
 

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"   
      "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" 
      lang="en" id="facebook" class=" no_js">
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-language" content="en" />
```
除了压缩方法，头部也会指定怎么样去缓存页面，设的任何cookies，隐私信息等等。

> 我们发现返回头部设置Content-Type为text/html。头部指导浏览渲染返回的结果内容是HTML,而不是说瞎子啊一个文件。浏览器将会根据返回头部决定怎么样去处理返回结果。但也会考虑其他因素，例如URL的扩展。

8. 浏览器开始渲染HTML

 ![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/broswer/18.png?raw=true)  
即使在这之前浏览器已经接受过整个HTML文档，他也会开始渲染网站。

9. 浏览器为嵌入在HTML的对象发送请求

 ![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/broswer/20.png?raw=true)  

当浏览器开始渲染HTML，他会发现标签里面需要获取其他URLs,浏览器将会发送GET请求去获取这些文件

这里有些URLs是我访问facebook网站检索的

```
Images
http://static.ak.fbcdn.net/rsrc.php/z12E0/hash/8q2anwu7.gif
http://static.ak.fbcdn.net/rsrc.php/zBS5C/hash/7hwy7at6.gif
…
CSS style sheets
http://static.ak.fbcdn.net/rsrc.php/z448Z/hash/2plh8s4n.css
http://static.ak.fbcdn.net/rsrc.php/zANE1/hash/cvtutcee.css
…
JavaScript files
http://static.ak.fbcdn.net/rsrc.php/zEMOA/hash/c8yzb6ub.js
http://static.ak.fbcdn.net/rsrc.php/z6R9L/hash/cq2lgbs8.js
```

每一个URls都会经历跟请求HTML相同的处理过程，所以，浏览器将会查找DNS域名解析，发送请求

然而，静态文件--不像动态页面-允许浏览器缓存它们。有些文件或许是缓存提供的一点也没有联系服务器。浏览器知道对某个特定的文件缓存多长时间是因为返回的文件包括一个过期的头部。另外，每个返回也包含一个ETag头部像一个版本号---如果浏览器发现已经有一个跟ETag版本相同的文件，就会马上停止传输。

10. 浏览器发送进一步的异步（Ajax）请求


 ![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/broswer/21.png?raw=true)  
 
 Web2.0的精髓就是客户端页面可以继续跟客户端交互即使在网已经请求渲染。
 
 例如，Facebook 聊天将会继续更新你的新登录的或者退出的用户列表。在你的浏览器Js已经被执行发送异步请求。异步请求是编程式指导GET或者POST请求到特定的URL.在Facebook这个例子，客户端发送一个post请求htt p://www.facebook.com/ajax/chat/buddy_list.php 去获取的你的在线好友列表。
 
 这个模式有时候被联系到AJAX,代表“Asynchronous JavaScript And XML”，但是没有特定的理由说为什么服务器需要格式化返回结果为XML。
 
 