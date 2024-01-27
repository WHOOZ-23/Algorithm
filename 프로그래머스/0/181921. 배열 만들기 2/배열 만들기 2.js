function solution(l, r) {
    const arr = Array.from({length:64}, (_, i) => +((i+1).toString(2))*5).filter((x) => l<=x && x<=r);
    return arr.length>0 ? arr : [-1];
}