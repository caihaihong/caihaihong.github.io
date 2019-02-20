#### JS加载 defer async

##### 脚本阻塞问题实际有两种解决方案

```
<script async src="js/vendor/jquery.js"></script>
```
* 浏览器遇到 async 脚本时不会阻塞页面渲染，而是直接下载然后运行。脚本的执行时间就无法控制，只是脚本不会阻止剩余页面的显示。


```
<script defer src="js/vendor/jquery.js"></script>
```
* 添加 defer（延时） 属性的脚本将按照在页面中出现的顺序加载，将脚本代码放置在页面底部可以替代defer所提供的功能。


###### 注意：如果元素同时定义了defer和async特性，则按async来处理，对于不支持async的浏览器会直接忽略async特性。