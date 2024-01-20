function solution(babbling) {
    let arr = ["aya", "ye", "woo", "ma"];
    let answer = [];
    
    for(let i=0; i<babbling.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if(babbling[i]===arr[j] || babbling[i].includes(arr[j])) {
                babbling[i] = babbling[i].replace(arr[j], " ")
            }
        }
        answer.push(babbling[i]);
    }
    return answer.toString().replaceAll(" ", "").split(",").reduce((a, b) => (b==="" ? a+1 : a), 0);
}