function solution(a, b) {
    let getGCD = (x, y) => (y > 0 ? getGCD(y, x%y) : x);
    b /= getGCD(a, b);
    
    let i = 2;
    let arr = [];
    
    while(b!=1) {
        if(b%i===0) {
            arr.push(i)
            b/=i;
        } else {
            i++;
        }
    }
    
    return [...new Set(arr)].some((x) => !(x===2 || x===5)) ? 2 : 1;
}