#### link和@import CSS

##### CSS选择器权重
!important > 行内样式 > ID > 类、伪类、属性 > 标签名 > 继承 > 通配符

#### 区别

* @import是 CSS 提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。
* 加载页面时，link标签引入的 CSS 被同时加载；@import引入的 CSS 将在页面加载完毕后被加载。
* @import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link标签作为 HTML 元素，不存在兼容性问题。
* 可以通过 JS 操作 DOM ，插入link标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import的方式插入样式。
* 在link标签引入的 CSS 文件中使用@import时，相同样式将被该 CSS 文件本身的样式层叠。
