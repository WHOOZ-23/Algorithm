function solution(food) {
    let str = food.reduce((a, b, i) => i>0 ? a+i.toString().repeat(~~(b/2)) : a, "");
    
    return str + "0" + [...str].reverse().join("");
}