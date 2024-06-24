function solution(today, terms, privacies) {
    const result = [];
    
    privacies.forEach((x, i) => {
        terms.forEach((y, j) => {
            if(y.split(" ")[0] === x.split(" ")[1]) {
                let year = +x.split(" ")[0].split(".")[0];
                let month = +x.split(" ")[0].split(".")[1] + +y.split(" ")[1];
                let day = +x.split(" ")[0].split(".")[2];
                
                if(12 < month) {
                    if(month%12 === 0) {
                        year += month/12 - 1;
                        month = month - ((month/12 - 1) * 12);
                    } else {
                        year += Math.floor(month/12);
                        month %= 12;
                    }
                }
                
                if(year < +today.split(".")[0]) result.push(i+1);
                else if(year === +today.split(".")[0] && month < +today.split(".")[1]) result.push(i+1);
                else if (year === +today.split(".")[0] && month === +today.split(".")[1] && day <= +today.split(".")[2]) result.push(i+1);
            }
        });
    });
    
    return result;
}