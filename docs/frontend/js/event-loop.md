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

  ```html
  <script>
    new Promise((resolve) => {
        console.log('script1 Promise callback')
        setTimeout(() => {
            console.log('script1 Promise callback setTimeout')
            resolve()
        }, 0)
    }).then(() => console.log('script1 Promise then'))
    setTimeout(() => {
        console.log('script1 setTimeout')
    }, 0)
  </script>
  <div>123</div>
  <script>
    setTimeout(() => {
        console.log('script2 setTimeout')
    }, 0)
    new Promise((resolve) => {
        console.log('script2 Promise callback')
        setTimeout(() => {
            console.log('script2 Promise callback setTimeout')
            resolve()
        }, 0)
    }).then(() => console.log('script2 Promise then'))
    
    /**
     * script1 Promise callback
        script2 Promise callback
        script1 Promise callback setTimeout
        script1 Promise then
        script1 setTimeout
        script2 Promise callback setTimeout
        script2 Promise then
        script2 setTimeout
    **/
  </script>
  ```

2. postMessage()

3. requestIdleCallback()

4. scheduler.postTask()
