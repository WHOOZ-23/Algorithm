function solution(num_list) {
    let even = 0, odd = 0;
    
    for(let a of num_list) {
        if(a%2==0) {
            even++;
        } else {
            odd++;
        }
    }
    
    return [even, odd];
}