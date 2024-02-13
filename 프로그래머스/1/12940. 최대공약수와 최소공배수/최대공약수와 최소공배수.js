function solution(n, m) {
    const getGCD = (a, b) => {
        if(a%b===0) return b;
        else return getGCD(b, a%b);
    }
    
    return [getGCD(n, m), n*m/getGCD(n, m)];
}