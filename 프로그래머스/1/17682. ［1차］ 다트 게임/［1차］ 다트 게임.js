function solution(dartResult) {
    let score = dartResult.match(/\d+/g, "");
    let bonus = dartResult.replace(/\d+/g, " ").trim().split(" ");
    
    bonus.forEach((x, i) => {
        for(let j=0; j<x.length; j++) {
            if(x[j]==='S') score[i] = Math.pow(score[i], 1);
            if(x[j]==='D') score[i] = Math.pow(score[i], 2);
            if(x[j]==='T') score[i] = Math.pow(score[i], 3);
            if(x[j]==='*') {
                if(i===0) {
                    score[i] *= 2;
                } else {
                    score[i-1] *= 2;
                    score[i] *= 2;
                }
            }
            if(x[j]==='#') {
                score[i] *= -1;
            }
        }
    });
    
    return score.reduce((a, b) => a+b, 0);
}