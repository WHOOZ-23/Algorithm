function solution(n) {
    return Array.from({length: n}, (_, idx) => Array.from({length:n}, (_, idxx) => +(idx===idxx)))
}