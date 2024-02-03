function solution(arr) {
    let i=0;
    
    while(!(arr.every((x) => (x>=50 && x%2) || (x<50 && x%2===0)))) {
        arr = arr.map((x) => 50<=x ? (x%2 ? x : x/2) : (x%2 ? x*2+1 : x));
        i++;
    }
    
    return i;
}