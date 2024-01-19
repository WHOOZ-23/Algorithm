function solution(quiz) {
    const answer = [];
    
    for(let q of quiz) {
        let [first, oper, second, result] = q.replaceAll("= ", "").split(" ");
        
        let compare;
        if(oper==="+") {
            compare = parseInt(first) + parseInt(second);
        }
        if(oper==="-") {
            compare = parseInt(first) - parseInt(second);
        }
        
        answer.push(compare.toString()===result ? "O" : "X");
    }
    
    return answer;
}
