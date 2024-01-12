function solution(array, height) {
    let cnt = 0;
    array.forEach((x) => {if(x>height) cnt++});
    return cnt;
}