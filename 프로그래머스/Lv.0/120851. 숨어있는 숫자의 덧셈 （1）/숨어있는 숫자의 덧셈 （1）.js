function solution(my_string) {    
    return Array.from(my_string.replace(/[^0-9]/g, "")).reduce((a, b) => a + Number(b), 0);
}