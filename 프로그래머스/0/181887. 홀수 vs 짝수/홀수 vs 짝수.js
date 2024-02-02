function solution(num_list) {
    let odd = 0, even = 0;
    
    num_list.map((x, i) => i%2 ? odd+=x : even+=x);
    
    return Math.max(odd, even);
}