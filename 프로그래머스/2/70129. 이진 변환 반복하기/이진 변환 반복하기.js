function solution(s) {
    let cnt = 0;
    let zero = 0;
    
    while(s.length!==1 && s[0]!==1) {
        [...s].forEach((x) => {
            if(x==='0') zero++;
        });
        s=s.replaceAll(0, '');
        s=s.length.toString(2);
        cnt++;
    }
    
    return [cnt, zero];
}