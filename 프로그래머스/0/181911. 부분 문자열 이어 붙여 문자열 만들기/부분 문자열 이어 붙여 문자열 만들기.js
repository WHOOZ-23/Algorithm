function solution(my_strings, parts) {
    return parts.reduce((a, [s, e], i) => a + my_strings[i].slice(s, e+1), "");
}