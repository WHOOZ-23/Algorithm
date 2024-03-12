function solution(s) {
    let result = [0, 0];
    
    while(s.length>1) {
        [...s].forEach((x) => {
            if(x==='0') result[1]++;
        });
        s=s.replaceAll(0, '').length.toString(2);
        result[0]++;
    }
    
    return result;
}