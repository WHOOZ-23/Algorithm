function solution(intStrs, k, s, l) {
    return intStrs.map((x) => +x.slice(s, s+l)).filter((x) => x>k);
}