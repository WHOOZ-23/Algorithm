function solution(str1, str2) {
    return str1.split("").map((x, i) => x + str2[i]).join("");
}