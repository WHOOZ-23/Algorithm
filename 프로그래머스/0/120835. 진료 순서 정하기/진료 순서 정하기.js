function solution(emergency) {
    return emergency.map((x, i) => [...emergency].sort((a, b) => b-a).indexOf(x)+1);
}