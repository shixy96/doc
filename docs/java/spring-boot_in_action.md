Outlook of spring-boot

- Auto configuration
- Starter dependencies(web, spa, security...)
- CLI
- Actuator





@Autowired

- 默认按类型装配，搭配@Qualifier
- 默认情况下要求依赖对象必须存在，或(required=false)

@Resource

- 默认按照名称装配，找不到bean时才按照类型装配，J2EE JSR250规范

@Inject

- 根据类型装配，配合@Name，JSR330规范



```java
@value("${name}")// name是properties中的key
private String name;
```



@PostConstruct

@PreDestroy

```xml
<bean id="" class="" init-method="" destroy-method=""></bean>
```



@Configuration  相当于xml配置文件

@Bean 相当于<bean>

```java
@Configuration
@ComponentScan(basePackages="com.xxx.xx")
@PropertySource("classpath:xx.properties")
@Import({JdbcConfig.class})
public class xxx {
	@Bean
  @Scope("prototype")
  public xx xx() {
    
  }
}
```



Aop，重复代码优化：性能监视、事务管理、安全检查、缓存

前置通知、后置通知、环绕通知、异常通知

