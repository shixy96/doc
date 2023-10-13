# EventLoop

## 长任务
[分割长任务的方式](https://web.dev/optimize-long-tasks/#task-management-strategies)
1. setTimeout()
  Promise 和 setTimeout 结合
  ```js
  function yieldToMain () {
    return new Promise(resolve => {
      setTimeout(resolve, 0);
    });
  }
  <!-- 和 navigator.scheduling.isInputPending() 结合 -->
  ```
2. postMessage()
3. requestIdleCallback()

4. scheduler.postTask()
