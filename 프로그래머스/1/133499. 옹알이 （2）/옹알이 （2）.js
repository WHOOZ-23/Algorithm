function solution(babbling) {
    let cnt = 0;
    
    babbling.forEach((x, i) => {
        babbling[i] = babbling[i].replace(/(ayaaya|yeye|woowoo|mama)/, " ");
        babbling[i] = babbling[i].replace(/^(aya|ye|woo|ma)+/, "");
        
        if(babbling[i]==="") cnt++;
    });
    
    return cnt;
}