Threadlocal：主要用来做线程变量的隔离

- Thread 对象是 java 语言中线程运行的载体，每个线程都有对应的 Thread 对象，存放线程相关的一些信息
- Thread 类中有个成员变量 ThreadlocalMap，key 存放的是 ThreadLocal 对象，value 是线程隔离的变量



强引用

软引用：内存空间不足时会回收

弱引用

虚引用



ThreadlocalMap 中的 key 设计成弱引用是为了尽最大的努力避免内存泄漏

