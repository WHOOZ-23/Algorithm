function solution(myString) {
    return myString.split("x").reduce((a, b) => [...a, b.length], []);
}