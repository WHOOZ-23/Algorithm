function solution(n, words) {
    const list = [];
    let result = [0, 0];
    
    for(let i=0; i<words.length; i++) {
        if(0 < i && words[i-1].slice(-1) !== words[i].charAt(0) || list.includes(words[i])) {
            return [i%n+1, Math.ceil((i+1)/n)];
        }
        
        list.push(words[i]);
    }
    
    return result;
}