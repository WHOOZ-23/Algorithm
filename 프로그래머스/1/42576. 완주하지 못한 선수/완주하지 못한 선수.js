function solution(participant, completion) {
    let result = {};
    
    participant.forEach((x) => {
        result[x] = (result[x]+1 || 1);
    });
    
    completion.forEach((x) => {
        result[x] = result[x]-1;
    });
    
    return Object.keys(result).find((key) => result[key]===1);
}