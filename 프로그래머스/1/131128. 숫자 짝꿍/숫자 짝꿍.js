function solution(X, Y) {
    let arr = Array(10).fill(0);
    let xArr = [...X];
    let yArr = [...Y];
    let result = "";
    
    xArr.forEach((x) => arr[x]++);
    yArr.forEach((x) => {
        if(arr[x]!==0) {
            arr[x]--;
            result = result.concat(x);
        }
    });
    
    result = [...result].sort((a, b) => b-a).join("");
    
    if(result.length===0) return "-1";
    else if(result[0]==="0") return "0";
    
    return result;
}