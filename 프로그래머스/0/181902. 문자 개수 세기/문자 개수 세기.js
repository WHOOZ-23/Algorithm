function solution(my_string) {
    const alphabet = Array(52).fill().map((_, i) => i<=25 ? String.fromCharCode(i+65) : String.fromCharCode(i+71));
    let arr = Array(52).fill(0);
    [...my_string].map((x) => arr[alphabet.indexOf(x)]++);
    return arr;
}