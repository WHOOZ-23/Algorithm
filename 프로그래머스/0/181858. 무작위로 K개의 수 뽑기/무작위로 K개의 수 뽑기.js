function solution(arr, k) {
    const list = [...new Set(arr)].slice(0, k);
    return Array.from({length:k}, (_, i) => isNaN(list[i]) ? -1 : list[i]);
}