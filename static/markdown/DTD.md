#### XML
XML 文档构建模块
* 元素
* 属性
* 实体
* PCDATA
* CDATA
##### DTD(document type definition)

```
<?xml version="1.0"?>
<!DOCTYPE note [
<!ELEMENT note (to,from,heading,body)>
<!ELEMENT to (#PCDATA)>
<!ELEMENT from (#PCDATA)>
<!ELEMENT heading (#PCDATA)>
<!ELEMENT body (#PCDATA)>
]>
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend</body>
</note>
```
* !DOCTYPE note (第二行)定义此文档是 note 类型的文档。
* !ELEMENT note (第三行)定义 note元素有四个元素："to、from、heading、body"
* !ELEMENT to (第四行)定义 to 元素为 "#PCDATA" 类型
* !ELEMENT from (第五行)定义 from 元素为 "#PCDATA" 类型
* !ELEMENT heading (第六行)定义 heading 元素为 "#PCDATA" 类型
* !ELEMENT body (第七行)定义 body 元素为 "#PCDATA" 类型
##### note.dtd
```
<!ELEMENT note (to,from,heading,body)>
<!ELEMENT to (#PCDATA)>
<!ELEMENT from (#PCDATA)>
<!ELEMENT heading (#PCDATA)>
<!ELEMENT body (#PCDATA)>
```
PCDATA:parsed character data被解析的字符数据.
CDATA:character data不会被解析器解析的文本.

##### 元素（标签）
声明一个元素
```
<!ELEMENT element-name category(目录)>
或
<!ELEMENT element-name (element-content)>
```
空元素
```
<!ELEMENT element-name EMPTY>
```
只有 PCDATA 的元素
```
<!ELEMENT element-name (#PCDATA)>
实例:
<!ELEMENT from (#PCDATA)>
```
通过类别关键词 ANY 声明的元素，可包含任何可解析数据的组合：
```
<!ELEMENT element-name ANY>
实例:
<!ELEMENT note ANY>
```
带有一个或多个子元素的元素通过圆括号中的子元素名进行声明：
```
<!ELEMENT element-name (child1)>
或
<!ELEMENT element-name (child1,child2,...)>
实例:
<!ELEMENT note (to,from,heading,body)>
```
声明只出现一次的元素
```
<!ELEMENT element-name (child-name)>
实例:
<!ELEMENT note (message)>
message 子元素必须出现一次，并且必须只在 "note" 元素中出现一次。
```
声明最少出现一次的元素
```
<!ELEMENT element-name (child-name+)>
实例:
<!ELEMENT note (message+)>
```
声明出现零次或多次的元素
```
<!ELEMENT element-name (child-name*)>
实例:
<!ELEMENT note (message*)>
```
声明出现零次或一次的元素
```
<!ELEMENT element-name (child-name?)>
实例:
<!ELEMENT note (message?)>
```
声明"非.../即..."类型的内容
```
<!ELEMENT note (to,from,header,(message|body))>
```
声明混合型的内容
```
<!ELEMENT note (#PCDATA|to|from|header|message)*>
```

##### DTD - 属性
声明属性
```
<!ATTLIST element-name attribute-name attribute-type attribute-value>
DTD 实例:
<!ATTLIST payment type CDATA "check">
XML 实例:
<payment type="check" />
```
#REQUIRED:属性值是必须的required
#IMPLIED:即该属性不是必须使用。
#FIXED：固定值

###### 列举属性值
```
<!ATTLIST element-name attribute-name (en1|en2|..) default-value>
```
实体
```
内部实体
<!ENTITY entity-name "entity-value">
DTD 实例:
<!ENTITY writer "Donald Duck.">
<!ENTITY copyright "Copyright runoob.com">
XML 实例：
<author>&writer;&copyright;</author>
外部实体
<!ENTITY writer SYSTEM "http://www.runoob.com/entities.dtd">
<!ENTITY copyright SYSTEM "http://www.runoob.com/entities.dtd">
XML example:
<author>&writer;&copyright;</author>
```
例子
```
<!DOCTYPE TVSCHEDULE [

<!ELEMENT TVSCHEDULE (CHANNEL+)>
<!ELEMENT CHANNEL (BANNER,DAY+)>
<!ELEMENT BANNER (#PCDATA)>
<!ELEMENT DAY (DATE,(HOLIDAY|PROGRAMSLOT+)+)>
<!ELEMENT HOLIDAY (#PCDATA)>
<!ELEMENT DATE (#PCDATA)>
<!ELEMENT PROGRAMSLOT (TIME,TITLE,DESCRIPTION?)>
<!ELEMENT TIME (#PCDATA)>
<!ELEMENT TITLE (#PCDATA)> 
<!ELEMENT DESCRIPTION (#PCDATA)>

<!ATTLIST TVSCHEDULE NAME CDATA #REQUIRED>
<!ATTLIST CHANNEL CHAN CDATA #REQUIRED>
<!ATTLIST PROGRAMSLOT VTR CDATA #IMPLIED>
<!ATTLIST TITLE RATING CDATA #IMPLIED>
<!ATTLIST TITLE LANGUAGE CDATA #IMPLIED>
```