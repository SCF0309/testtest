//Promise 是一個表示非同步運算的最終完成或失敗的物件。
//1.Promise 是一個物件 new Promise())
//  new Promise(executor)
//  excutor: function(rewolve, reject) {}
// 2.執行非同步工作
// 3.最終完成或失敗
//   完成 -> 呼叫 resolve
//   失敗 -> 呼叫 reject
let doWork = function (job, timer, cb) {
    // 1.物件 -> new
    return new Promise((resolve, reject) => {
        // 2.執行非同步工作
        setTimeout(() => {
            let now = new Date();
            cb(null, `完成工作 ${job} at ${now.toISOString()}`);
          }, timer);
    });

    
  };
  
  let now = new Date();
  console.log(`工作開始 at ${now.toISOString()}`);