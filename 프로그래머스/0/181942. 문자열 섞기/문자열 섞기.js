function solution(str1, str2) {
    return [...str1].map((x, i) => x+str2[i]).join("");
}