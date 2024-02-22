function solution(n, arr1, arr2) {
    arr1 = arr1.map((x) => x.toString(2).padStart(n, '0').split("").map((y) => +y));
    arr2 = arr2.map((x) => x.toString(2).padStart(n, '0').split("").map((y) => +y));
    
    arr1 = arr1.map((x, i) => x.map((y, j) => y+arr2[i][j]).join(""));
    
    return arr1.map((x) => x.replaceAll('0', ' ').replace(/[1-2]/g, '#'));
}