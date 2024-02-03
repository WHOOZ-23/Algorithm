function solution(arr) {
    let arr1 = arr;
    for(let i=0;;i++) {
        let arr2 = arr1.map((x) => 50<=x ? (x%2 ? x : x/2) : (x%2 ? x*2+1 : x));
        
        if(arr1.every((x, i) => x===arr2[i])) {
            return i;
            break;
        } else {
            arr1 = arr2;
        }
    }
}