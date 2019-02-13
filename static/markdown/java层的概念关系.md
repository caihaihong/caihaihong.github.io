#### java层的概念关系 View、Controller、Service、DAO
前提：没有这人为规定的这几层，也是可以开发的，那为什么要分层？
##### 分层的意义
* 高内聚，低耦合
* 代码可扩展性和适应性更强
* 维护简单

##### 层级介绍
* Controller:可以简单理解控制视图的跳转，也控制业务的逻辑，但是不是实现者，只需要调用service层的方法
* Service:业务逻辑层，业务逻辑的具体实现层，接着Controller层，给controller提供接口，调用DAO的接口
* DAO:(Data Access Object)持久层主要与数据库进行交互，数据访问对象。是负责数据访问处理，为service层提供接口。如果查询，则返回对象，如果增删改查，则返回boolean 
* Entity层:(domain层)实体层数据库在项目中的类
* View层:与控制层结合比较紧密，需要二者结合起来协同工发