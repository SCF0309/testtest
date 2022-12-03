function sum(n) {
    // 回傳 1+2+3+4+...+n 的結果
    let sum=0;
    for(i=0;i<=n;i++){
        sum+=i;
    }
    console.log(sum)
  }
  
  console.log(sum(1)); // 1
  console.log(sum(2)); // 3
  console.log(sum(3)); // 6
  console.log(sum(10)); // 55