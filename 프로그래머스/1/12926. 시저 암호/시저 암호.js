function solution(s, n) {
    return [...s].map((x) => {
        if(x.codePointAt()===32) return x;
        if(65<=x.codePointAt() && x.codePointAt()<=90) {
            if(x.codePointAt()+n>90) {
                return String.fromCharCode(x.codePointAt()-26+n);
            }
        } else if(97<=x.codePointAt() && x.codePointAt()<=122) {
            if(x.codePointAt()+n>122) {
                return String.fromCharCode(x.codePointAt()-26+n);
            }
        } 
        return String.fromCharCode(x.codePointAt()+n);
    }).join("");
}