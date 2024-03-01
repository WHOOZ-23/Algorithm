function solution(lottos, win_nums) {
    const win = {'6': 1, '5': 2, '4': 3, '3': 4, '2': 5, '1': 6, '0': 6};
    let highest = 0;
    let lowest = 0;
    
    lottos.map((x) => {
        win_nums.map((y) => {
            if(x===y) {
                lowest++; 
                highest++;
            }
        });
            if(x===0) highest++;
    });
    
    return [win[highest], win[lowest]];
}