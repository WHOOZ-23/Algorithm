function solution(s, skip, index) {
    let str = '';
    
    for(let i=0; i<s.length; i++) {
        let char = s.charCodeAt(i);
        for(let j=0; j<index; j++) {
            char+=1;
            
            if(122<char) char-=26;
            
            while(skip.includes(String.fromCharCode(char))) {
                char+=1;
                if(122<char) char-=26;
            }
        }
        str += String.fromCharCode(char);
    }
    
    return str;
}