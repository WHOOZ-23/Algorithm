function solution(rsp) {
    return [...rsp].map((x) => Number(x)===2 ? 0 : Number(x)===0 ? 5 : 2).join("");
}