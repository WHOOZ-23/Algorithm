function solution(keymap, targets) {
    let result = [];
    
    for(let i=0; i<targets.length; i++) {
        let cnt = 0;
        for(let j=0; j<targets[i].length; j++) {
            let arr = [];
            
            for(let k=0; k<keymap.length; k++) {
                if(keymap[k].indexOf(targets[i][j])!==-1) {
                    arr.push(keymap[k].indexOf(targets[i][j])+1);
                }
            }
            if(arr.length===0) {
                cnt = -1;
                break;
            } else {
                cnt += Math.min(...arr);
            }
        }
        result.push(cnt);
    }
    
    return result;
}