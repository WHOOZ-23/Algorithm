function solution(arr1, arr2) {
    return arr1.map((x) => arr2[0].map((_, i) => x.reduce((a, b, j) => a + b * arr2[j][i], 0)));
}