function solution(s) {
    let same = 0;
    let different = 0;
    let cnt = 0;
    let ch = '';
    
    for(let i=0; i<s.length; i++) {
        
        if(ch==='') ch = s[i];
        
        if(ch===s[i]) {
            same++;
        } else {
            different++;
        }
        
        if(same===different) {
            cnt++;
            ch = '';
            same = different = 0;
        } else if(i===s.length-1) {
            cnt++;
        }
    }
    
    return cnt;
}