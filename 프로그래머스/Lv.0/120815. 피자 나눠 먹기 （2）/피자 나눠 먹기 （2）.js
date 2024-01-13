function solution(n) {
    let x = 1;
    
    while(true) {
        if((x%n===0) && (x%6===0)) {
            return x/6;
            break;
        } else {
            x++;
        }
    }
}