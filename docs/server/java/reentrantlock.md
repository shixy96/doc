#### 可重入锁

当一个线程获取锁之后，这个线程可以再次获取锁，重新进入临界区（访问公共资源的程序片段）

| synchronized                                                 | ReentrantLock                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 非公平锁                                                     | 可自定义                                                     |
| 使用形式固定                                                 | 可以尝试获取锁（tryLock）<br>带超时时间的获取锁<br/>可响应中断（lockInterruptibly） |
| 可重入                                                       | 可重入                                                       |
| synchronized 修饰方式加锁，自动释放锁（没有显示的unlock操作） | ReentrantLock 显示加锁，显示释放锁（有lock、unlock操作）     |
| 基于monitor（监视器）模式                                    | 基于 AQS                                                     |

#### ReentrantLock

- 可尝试获取锁
  - lock.tryLock()

- 公平锁
  - 非公平锁的吞吐量比公平锁高很多，所以默认使用非公平锁。

- 待条件等待



#### AQS（AbstractQueuedSynchronizer）

