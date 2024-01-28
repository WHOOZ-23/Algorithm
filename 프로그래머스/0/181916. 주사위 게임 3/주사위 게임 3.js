function solution(a, b, c, d) {
    if(a===b&&b===c&c===d) {
        return 1111*a;
    } else if(a===b&&b===c || a===b&&b===d || a===c&&c===d || b===c&&c===d) {
        if(a===b&&b===c) return (10*a+d)**2;
        if(a===b&&b===d) return (10*a+c)**2;
        if(a===c&&c===d) return (10*a+b)**2;
        if(b===c&&c===d) return (10*b+a)**2;
    } else if((a===b&&c===d) || (a===c&&b===d) || (a===d&&b===c)) {
        if(a===b&&c===d) return (a+c)*Math.abs(a-c);
        if(a===c&&b===d) return (a+b)*Math.abs(a-b);
        if(a===d&&b===c) return (a+b)*Math.abs(a-b);
    } else if(a===b || a===c || a===d || b===c || b===d || c===d) {
        if(a===b) return c*d;
        if(a===c) return b*d;
        if(a===d) return b*c;
        if(b===c) return a*d;
        if(b===d) return a*c;
        if(c===d) return a*b;
    } else {
        return Math.min(Math.min(a, b), Math.min(c, d));
    }
}