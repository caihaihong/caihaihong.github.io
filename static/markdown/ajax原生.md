#### ajax原生请求

##### 传统web缺点
传统web请求，用户触发http请求，服务器收到请求，返回一个新的页面，浏览器重新加载页面，每一个请求，都会重新返回一个html页面，浪费了带宽，用户体验糟糕。

##### AJAX介绍
AJAX是一种动态网页实现技术，网页可以实现部分数据进行**异步**更新。

##### XMLHttpRequest对象（window）
XMLHttpRequest对象是ajax实现的基础，与服务器进行数据交互。

##### XMLHttpRequest对象方法
* abort():请求终止
* getAllResponseHeaders():获取返回头信息
* open("method","URL",[asyncFlag],["userName"],["password"]
* send(content):发出请求
* setRequestHeader("header", "value")：设置请求头

##### 使用步骤
1. 创建XMLHttpRequest异步对象
2. 设置请求方式，参数
3. 发出请求
4. 注册返回监听事件

##### 具体应用

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ajax原生请求</title>
</head>
<body>
</body>
</html>
<script>
    // get请求
    // 1.创建异步对象
    let xmlRequestObj = new XMLHttpRequest();
    // 2.用于指定发送HTTP请求的参数 
    xmlRequestObj.open('get', 'http://localhost:8888/');
    // 3.发出请求
    xmlRequestObj.send();
    // 4.注册返回监听事件
    xmlRequestObj.onreadystatechange = function() {
        if (xmlRequestObj.readyState == 4 && xmlRequestObj.status == 200) {
            console.log(xmlRequestObj.responseText)
        }
    }

    // post请求
    // 创建异步对象  
    var xhr = new XMLHttpRequest();
    // 设置请求的类型及url true:是否异步
    xhr.open('post', 'http://localhost:8888/', true);
    // post请求一定要添加请求头
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // 发送请求
    xhr.send('name=fox&age=18');
    xhr.onreadystatechange = function() {
        // 这步为判断服务器是否正确响应
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    };
</script>
```

##### server.js 
(cmd启动服务:node server.js)
```js
var http = require('http');
http.createServer(function(request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://localhost:8888/');
```



