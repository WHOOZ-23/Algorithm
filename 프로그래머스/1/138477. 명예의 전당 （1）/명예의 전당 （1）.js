function solution(k, score) {
    let arr = [];
    const queue = (x) => {
        arr.push(x);
        arr.sort((a, b) => a-b);
        
        if(k<arr.length) {
            arr.shift();
        }
        
        return arr[0];
    }
    let result = [];
    
    score.map((x, i) => {
        result.push(queue(x));
    });
    
    return result;
}