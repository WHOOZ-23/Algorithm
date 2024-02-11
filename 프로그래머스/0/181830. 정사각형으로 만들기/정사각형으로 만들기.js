function solution(arr) {
    arr.map((x) => x.map((y) => {
        if(arr.length > x.length) {
            while(arr.length!==x.length) {
                x.push(0);
            }
        } else if(arr.length < x.length) {
            while(arr.length!==x.length) {
                arr.push(Array(x.length).fill(0));
            }
        } else {
            return y;
        }
    }));
    
    return arr;
}