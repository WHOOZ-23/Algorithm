function solution(arr) {
    const size = 2**Math.ceil(Math.log2(arr.length));
    return [...arr, ...Array(size-arr.length).fill(0)];
}