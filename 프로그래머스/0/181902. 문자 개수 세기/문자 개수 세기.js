function solution(my_string) {
    let arr = Array(52).fill(0);
    [...my_string].map((x) => x.charCodeAt()<=90 ? arr[x.charCodeAt()-65]++ : arr[x.charCodeAt()-71]++)
    return arr;
}