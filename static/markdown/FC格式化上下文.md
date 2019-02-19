#### Formatting context 格式化上下文

##### Formatting context

W3C CSS2.1规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。

##### 常见Formatting context 
* Block fomatting context (BFC)
* Inline formatting context (IFC)。

##### Box: CSS布局的基本单位

Box 是 CSS 布局的对象和基本单位， 一个页面是由多个 Box 组成的。元素的类型和display 属性，决定了这个Box类型。 不同类型的Box，会参与不同的Formatting Context（一个决定如何渲染文档的容器），因此Box内的元素会以不同的方式渲染。

* block-level box:display属性为block,list-item,table 的元素，会生成block-level box。并且参与 block fomatting context；
* inline-level box:display 属性为 inline, inline-block, inline-table 的元素，会生成 * inline-level box。并且参与 inline formatting context；


##### BFC定义 
BFC(Block formatting context):块级元素格式化上下文，独立的渲染区域，只有block-level box参与，它规定内部的Block-level box如何布局，并且与区域之外元素互不相关。

##### BFC布局规则
1. 内部的Box会在垂直方向，一个接一个放置
2. box垂直方向的距离由margin决定，相邻的box的margin会重叠
3. 每个元素的左外边缘（margin-left)， 与父容器（containing box）的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。除非这个元素自己形成了一个新的BFC。
4. BFC的区域不会与float box重叠
5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
6. 计算BFC的高度时，浮动元素也参与计算

##### BFC布局规则3
每个元素的左外边缘（margin-left)， 与父容器（containing box）的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。除非这个元素自己形成了一个新的BFC。
```
<style>
    body {
        width: 300px;
    }
 
    .aside {
        width: 100px;
        height: 150px;
        float: left;
        background: #f66;
    }
 
    .main {
        height: 200px;
        background: #fcc;
    }
</style>
<body>
    <div class="aside"></div>
    <div class="main"></div>
</body>

```
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/css/2.png?raw=true)

##### BFC布局规则4
设置main元素为overflow: hidden;使其成为BFC,BFC的区域不会与float box重叠
```
<style>
    body {
        width: 300px;
    }
 
    .aside {
        width: 100px;
        height: 150px;
        float: left;
        background: #f66;
    }
 
    .main {
        height: 200px;
        background: #fcc;
        overflow: hidden;
    }
</style>
<body>
    <div class="aside"></div>
    <div class="main"></div>
</body>

```
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/css/3.png?raw=true)

##### BFC布局规则2
box垂直方向的距离由margin决定，相邻的box的margin会重叠
```
<style>
    p {
        color: #f55;
        background: #fcc;
        width: 200px;
        line-height: 100px;
        text-align: center;
        margin: 100px;
    }
</style>

<body>
    <p>Haha</p>
    <p>Hehe</p>
</body>

```
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/css/6.png?raw=true)



#### [原文](https://www.w3.org/TR/CSS2/visuren.html#block-formatting)：
Floats, absolutely positioned elements, block containers (such as inline-blocks, table-cells, and table-captions) that are not block boxes, and block boxes with 'overflow' other than 'visible' (except when that value has been propagated to the viewport) establish new block formatting contexts for their contents.

In a block formatting context, boxes are laid out one after the other, vertically, beginning at the top of a containing block. The vertical distance between two sibling boxes is determined by the 'margin' properties. Vertical margins between adjacent block-level boxes in a block formatting context collapse.

In a block formatting context, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch). This is true even in the presence of floats (although a box's line boxes may shrink due to the floats), unless the box establishes a new block formatting context (in which case the box itself may become narrower due to the floats).

##### 创建块格式化上下文：

* 根元素或包含根元素的元素
* 浮动元素（元素的 float 不是 none）
* 绝对定位元素（元素的 position 为 absolute 或 fixed）
* 行内块元素（元素的 display 为 inline-block）
* 表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
* 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
* 匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
* overflow 值不为 visible 的块级元素
* display 值为 flow-root 的元素
* contain 值为 layout、content或 strict 的元素
* 弹性元素（display为 flex 或 inline-flex元素的直接子元素）
* 网格元素（display为 grid 或 inline-grid 元素的直接子元素）
* 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
* column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。


##### 利用BFC清除浮动
设置main元素为overflow: hidden;使其成为BFC,BFC的区域不会与float box重叠
```
<style>
    .par {
        border: 5px solid #fcc;
        width: 300px;
        overflow: hidden;//成为BFC
    }
    
    .child {
        border: 5px solid #f66;
        width: 100px;
        height: 100px;
        float: left;
    }
</style>

<body>
    <div class="par">
        <div class="child"></div>
        <div class="child"></div>
    </div>
</body>

```
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/css/4.png?raw=true)
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/css/5.png?raw=true)

##### 利用BFC处理margin重叠
p外面包裹一层容器，并触发该容器生成一个BFC。那么两个P便不属于同一个BFC，就不会发生margin重叠了。
```
<style>
    .par {
        border: 5px solid #fcc;
        width: 300px;
        overflow: hidden;//成为BFC
    }
    
    .child {
        border: 5px solid #f66;
        width: 100px;
        height: 100px;
        float: left;
    }
</style>

<body>
    <div class="par">
        <div class="child"></div>
        <div class="child"></div>
    </div>
</body>

```
![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/css/7.png?raw=true)










