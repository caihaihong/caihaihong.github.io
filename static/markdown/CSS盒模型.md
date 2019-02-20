#### CSS盒模型

元素内容：content、padding、border、margin

![image](https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/css/box.png?raw=true)

##### 概念：标准模型、IE模型（怪异模式）

```
* box—sizing：border-box; IE盒模型，border和padding计算入width之内
* box—sizing：content-box; W3C标准盒模型，default
* box—sizing：padding-box; 包括padding
* box—sizing：margin-box; 不支持，margin重叠合并。
```

##### margin合并叠加（取大值）
注意：标准流块级元素才会合并margin,行内元素、浮动或绝对定位之间的外边距不会合并。

##### JS获取元素宽高


1. dom.style.width/height:获取内联样式宽高。
2. dom.currentStyle.width/height：当前元素的宽高，IE支持
3. window.getComputedStyle(dom元素).width/height：当前元素的宽高
4. dom.getBoundingClientRect().width/height：返回值是一个 DOMRect 对象，这个对象是由该元素的 getClientRects() 方法返回的一组矩形的集合, 即：是与该元素相关的CSS 边框集合 。DOMRect 对象包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。
5. dom.offsetWidth/offsetHeight：border+padding+content


```
.box {
    width: 100px;
    height: 100px;
    border: solid 10px red;
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
}

<script>
    var getBoundingClientRectWidth = document.getElementById('box').getBoundingClientRect().width;
    //border-box:100  content + padding + border 
    //content-box:140 + padding + border 

    var getComputedStyleWidth = window.getComputedStyle(document.getElementById('box')).width;
    //border-box:100px   content+padding+border
    //content-box:100px content

    var DomoffsetHeight = document.getElementById('box').offsetHeight;
    //border-box:100  content
    //content-box:140 content+padding+border
    
    var domClientHreight = document.getElementById('box').clientHeight;
    //border-box:80  content+padding
    //content-box:120 content+padding+border
    console.log(getBoundingClientRectWidth)
</script>
```
```
scrollHeight = clientHeight + scrollTop
```
