function solution(s1, s2) {
    let arr = [];
    s1.map((x) => s2.filter((y) => {if(x===y) arr.push(x)}));
    return arr.length;
}