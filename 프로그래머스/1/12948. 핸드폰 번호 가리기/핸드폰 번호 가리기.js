function solution(phone_number) {
    return [...phone_number].map((x, i) => i<phone_number.length-4 ? "*" : x).join("");
}