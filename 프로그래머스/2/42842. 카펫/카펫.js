function solution(brown, yellow) {
    for(var i=0; i<=(brown+yellow)/i; i++) {
        var x = (brown+yellow)/i;
        if((x-2)*(i-2) === yellow) {
            break;
        }
    }
    
    return [x, i];
}