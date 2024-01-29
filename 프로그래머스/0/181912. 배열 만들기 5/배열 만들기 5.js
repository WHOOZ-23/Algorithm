function solution(intStrs, k, s, l) {
    return intStrs.map((x) => +([...x].splice(s, l).join(""))).filter((x) => x>k);
}