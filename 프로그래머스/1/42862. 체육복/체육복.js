function solution(n, lost, reserve) {
    let losted = lost.sort((a, b) => a-b).filter((x) => !reserve.includes(x));
    let reserved = reserve.sort((a, b) => a-b).filter((x) => !lost.includes(x));
    
    const result = losted.filter((x) => {
        const rent = reserved.find((y) => Math.abs(y-x)===1);
        
        if(!rent) return x;
        reserved = reserved.filter((y) => y!==rent);
    });
    
    return n-result.length;
}