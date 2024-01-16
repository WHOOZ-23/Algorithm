function factorial(num) {
    return num<=1 ? 1 : num*factorial(num-1);
}

function solution(n) {
    let i = 1;
    while(factorial(i)<=n) {
       i++; 
    }
    return i-1;
}