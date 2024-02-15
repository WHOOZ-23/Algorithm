function solution(s, n) {
    return [...s].map((x) => {
        if(x===" ") return x;
        return String.fromCharCode((x.charCodeAt()>90) ? (x.charCodeAt()+n-97)%26+97 : (x.charCodeAt()+n-65)%26+65)
    }).join("");
}