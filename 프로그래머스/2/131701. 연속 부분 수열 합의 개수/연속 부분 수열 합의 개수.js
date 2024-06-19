function solution(elements) {
    const result = [];
    
    for(let i=0; i<elements.length-1; i++) {
        const sequence = [...elements, ...elements.slice(0, i)];
        
        for(let j=0; j<elements.length; j++) {
            result.push([...sequence].splice(j, i+1).reduce((a, b) => a + b, 0));
        }
    }
    
    result.push(elements.reduce((a, b) => a + b, 0));
    
    return new Set(result).size;
}