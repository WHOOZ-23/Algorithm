function solution(participant, completion) {
    let hashMap = new Map();
    
    participant.forEach((x) => {
        if(hashMap.has(x)) hashMap.set(x, hashMap.get(x)+1);
        else hashMap.set(x, 1);
    });
    
    completion.forEach((x) => {
        hashMap.set(x, hashMap.get(x)-1);
    });
    
    for(let [key, value] of hashMap) {
        if(value===1) return key;
    }
}