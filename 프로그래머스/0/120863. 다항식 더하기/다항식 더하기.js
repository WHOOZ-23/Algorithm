function solution(polynomial) {
    const arr = polynomial.replaceAll(" ", "").match(/([+/-]?\s*\d*\s*x)|([+/-]?\s*\d+)/g);
    let xNum = 0;
    let num = 0;
    
    arr.forEach((x) => {
        if(x.includes("x")) {
            if(x==="x" || x==="+x") xNum += 1;
            else if(x==="-x") xNum -= 1;
            else xNum += parseInt(x);
        } else {
            num += parseInt(x);
        }
    })
    return `${xNum===0 ? "" : (xNum===1 ? "x" : xNum+"x")}`+ `${num===0 ? "" : (xNum===0 ? ""+num : (num>0 ? " + "+num : num.toString().replace("-", " - ") ))}`;
}