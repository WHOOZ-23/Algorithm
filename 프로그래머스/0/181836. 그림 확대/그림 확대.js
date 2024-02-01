function solution(picture, k) {
    let result = []
    
    picture.forEach((x) => {
        for(let i=0; i<k; i++) {
            result.push(x.split("").map((y) => y.repeat(k)).join(""));
        }
    })
    
    return result;
}