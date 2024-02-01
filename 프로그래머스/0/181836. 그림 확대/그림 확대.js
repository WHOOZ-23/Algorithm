function solution(picture, k) {
    let result = []
    
    picture.forEach((x) => {
        for(let i=0; i<k; i++) {
            result.push([...x].reduce((a, b) => a+b.repeat(k), ""));
        }
    })
    
    return result;
}