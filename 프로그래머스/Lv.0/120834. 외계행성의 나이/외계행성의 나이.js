function solution(age) {
    return age.toString().split("").map((x) => "abcdefghij"[x]).join("");
}