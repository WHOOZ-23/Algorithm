function solution(k, score) {
    const queue = [];
    
    return score.reduce((a, b) => {
        queue.push(b);
        queue.sort((a, b) => a-b);
        
        if(k<queue.length) queue.shift();
        
        a.push(queue[0]);
        
        return a;
    }, []);
}