function solution(my_string) {    
    const op = my_string.split(" ").filter((x) => isNaN(x));
    const num = my_string.split(" ").filter((x) => !isNaN(x)).map((x) => +x);
    
    return num.reduce((a, b, i) => op[i-1]==="+" ? a+b : a-b);
}