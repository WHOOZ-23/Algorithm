function solution(num_list) {
    let i=0;
    while(!(num_list.every((x) => x===1))) {
        num_list = num_list.map((x) => {
            if(!(x===1)) {
                if(x%2) {
                    i++;
                    return (x-1)/2;
                } 
                
                if(x%2===0) {
                    i++;
                    return x/2;
                }
            }
            return x;
        });
    }
    return i;
}