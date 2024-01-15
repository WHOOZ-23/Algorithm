function solution(age) {
    let alpha = Array.from({length:26}, (_, i) => String.fromCharCode(i+97));
    return age.toString().split("").map((x) => alpha[x]).join("");
}