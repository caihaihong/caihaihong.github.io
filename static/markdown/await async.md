#### async await

##### demo1

``` 
    //await 只能等待一个promise对象
    "use strict";
    (async function() {
        console.log(1);
        await new Promise((resolve) => {
            setTimeout(function() {
                console.log(2);
                resolve();
            }, 1000);
        });
        console.log(3);
    }())
```

##### demo2
##### async
When an async function is called, it returns a Promise. When the async function returns a value, the Promise will be resolved with the returned value. When the async function throws an exception or some value, the Promise will be rejected with the thrown value.
```
  async function imAsync(num) {
        if (num > 0) {
            return num // 这里相当于resolve(num)
        } else {
            throw num // 这里相当于reject(num)
        }
    }
    imAsync(1).then(function(v) {
        console.log(v); // 1
    });
    // 注意这里是catch
    imAsync(0).catch(function(v) {
        console.log(v); // 0
    })
    
    
```
```
function imPromise(num) {

  return new Promise(function (resolve, reject) {
    if (num > 0) {
      resolve(num);
    } else {
      reject(num);
    }
  })
}

imPromise(1).then(function (v) {
  console.log(v); // 1
})

imPromise(0).then(function (v) {
  console.log(v); // 0
})

```

##### await
An async function can contain an await expression, that pauses the execution of the async function and watis for the passed Promise's resolution, and then resumes the async function's execution and returns the resolved value.

The purpose of async/await functions is to simplify the behavior of using promises synchronously and to perform some behavior on a group of Promises. Just like Promises are similar to structured callbacks, async/await is similar to combining generators and promises.

