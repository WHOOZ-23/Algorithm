function solution(number) {
    let arr = [];
    
    for(let i=0; i<number.length-2; i++) {
        for(let j=i+1; j<number.length-1; j++) {
            for(let k=j+1; k<number.length; k++) {
                let index = [number[i], number[j], number[k]];
                arr.push(index);
            }
        }
    }
    
    return arr.map((x) => x.reduce((a, b) => a+b)).filter((x) => x===0).length;
}