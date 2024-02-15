function solution(s) {
    const letter = {};
    let arr = Array(s.length).fill(-1);
    
    [...s].forEach((x, i) => {
        if(Object.keys(letter).includes(x)) {
            arr[i] = i - letter[x];
            letter[x] = i;
        } else {
            letter[x] = s.indexOf(x);
        }
    });
    
    return arr;
}