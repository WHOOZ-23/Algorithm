function solution(n, control) {
    return [...control].reduce((a, b) => {
        if(b==="w") return a+=1;
        if(b==="s") return a-=1;
        if(b==="d") return a+=10;
        if(b==="a") return a-=10;
    }, n)
}