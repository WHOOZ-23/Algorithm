function solution(n, control) {
    return [...control].reduce((a, b) => {
        if(b==="w") return n+=1;
        if(b==="s") return n-=1;
        if(b==="d") return n+=10;
        if(b==="a") return n-=10;
    }, n)
}