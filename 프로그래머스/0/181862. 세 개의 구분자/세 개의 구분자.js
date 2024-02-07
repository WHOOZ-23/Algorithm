function solution(myStr) {
    const str = myStr.split(/[abc]/g).filter((x) => x);
    return str.length ? str : ["EMPTY"];
}