function solution(a, b, c) {
    if(a===b && b===c) {
        return 27*Math.pow(a, 6);
    } else if(a===b || b===c || c===a) {
        return (a+b+c)*(a*a+b*b+c*c);
    } else {
        return a+b+c;
    }
}