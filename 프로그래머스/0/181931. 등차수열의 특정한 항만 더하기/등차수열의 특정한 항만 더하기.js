function solution(a, d, included) {
    let arr = Array.from({length: included.length}, (_, i) => a+i*d);
    return included.map((x, i) => x===true ? arr[i] : 0).reduce((a, b) => a+b, 0);
}