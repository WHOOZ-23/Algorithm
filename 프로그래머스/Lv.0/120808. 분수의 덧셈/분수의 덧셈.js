function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1*denom2 + numer2*denom1;
    let denom = denom1*denom2;
    let GCD = (a, b) => {
        if(a%b===0) return b
        else return GCD(b, a%b)
    }
    let getGCD = GCD(numer, denom);
    
    return [numer/getGCD, denom/getGCD];
}