function solution(n, m) {
    const nm = n*m;
    let r;
    for(;r=n%m;n=m, m=r) {}
    
    return [m, nm/m];
}