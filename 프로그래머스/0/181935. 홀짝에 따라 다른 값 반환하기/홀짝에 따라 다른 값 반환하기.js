function solution(n) {
    return n%2 ? Array.from({length: Math.ceil(n/2)}, (_, i) => 2*i+1).reduce((a, b) => a+b, 0) : Array.from({length: n/2}, (_, i) => 2*(i+1)).reduce((a, b) => a + Math.pow(b, 2), 0); 
}