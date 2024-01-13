function solution(strlist) {
    return strlist.reduce((a, b) => [...a, b.length], []);
}