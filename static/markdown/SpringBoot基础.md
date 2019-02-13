#### @SpringBootApplication
* 开启Spring Boot的自动配置
* @SpringBootConfiguration、@EnableAutoConfiguration以及@ComponentScan三个注解的组合
  * @SpringBootConfiguration：配置类
  * @EnableAutoConfiguration：根据类路径中的jar包依赖为当前项目进行自动配置
  * @ComponentScan：扫描包的类
#### javaBean 实体类关系
JavaBean就是一种特殊的实体类 
它有一系列set和get方法对私有变量进行操作 
 
#### application.properties使用
```
声明
book.author=罗贯中
book.name=三国演义
注入
@Value(value = "${book.author}")
    private String bookAuthor;
@Value(value = "${book.name}")
    private String bookname;
    
类型安全配置 
//book.properties
book.name=红楼梦
book.author=曹雪芹
book.price=28
//BookBean.java
@Component
@ConfigurationProperties(prefix = "book",locations = "classpath:book.properties")
public class BookBean {
    private String name;
    private String author;
    private String price;
}
//controller Bean注入
@Autowired
    private BookBean bookBean;
```
#### 日志配置
```
logging.file=/home/sang/workspace/log.log
logging.level.org.springframework.web=debug
```

