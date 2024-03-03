function solution(ingredient) {
    let hamburger = [];
    let cnt = 0;
    
    ingredient.forEach((x) => {
        hamburger.push(x);
        
        if(hamburger.slice(-4).join("")==="1231") {
            cnt++;
            hamburger.splice(-4);
        }
    });
    
    return cnt;
}