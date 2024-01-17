function solution(s) {
    let arr = s.split(" ");
    return arr.reduce((a, b, i) => b==="Z" ? a-arr[i-1] : a+Number(b), 0);
}