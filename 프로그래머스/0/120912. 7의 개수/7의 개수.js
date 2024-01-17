function solution(array) {
    return [...array.join("")].filter((x) => x==="7").length;
}