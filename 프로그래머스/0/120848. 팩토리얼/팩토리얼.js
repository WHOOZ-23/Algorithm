function solution(n) {
    let result = 1;
    for(let i=1; i<=10; i++) {
        result *= i;
        if(result > n) {
          return i-1;
        } else if(result === n) {
          return i;
        }
    }
}