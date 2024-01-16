function solution(i, j, k) {
    return Array.from({length:j-i+1}, (_, index) => index+i).join("").split("").filter((x) => +x===k).length;
}