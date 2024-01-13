function solution(n) {
    let x = 1;
    
    while(true) {
        if(n*x%6===0) {
            return n*x/6;
            break;
        }
        x++;
    }
}