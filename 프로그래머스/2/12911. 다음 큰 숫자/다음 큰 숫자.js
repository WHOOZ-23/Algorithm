function solution(n) {
    let n2 = n+1;
    
    while(true) {
        const num = n.toString(2).split("").reduce((a, b) => +a + +b, 0);
        const num2 = n2.toString(2).split("").reduce((a, b) => +a + +b, 0);
        
        if(num === num2) {
            break;
        } 
        
        n2++;
    }
    
    return n2;
}