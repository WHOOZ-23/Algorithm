function solution(lines) {
    let [[x1, y1], [x2, y2], [x3, y3]] = lines;
    
    let l1 = Math.min(y1, y2) - Math.max(x1, x2)<0 ? [] :  [Math.max(x1, x2), Math.min(y1, y2)];
    let l2 = Math.min(y2, y3) - Math.max(x2, x3)<0 ? [] :  [Math.max(x2, x3), Math.min(y2, y3)];
    let l3 = Math.min(y1, y3) - Math.max(x1, x3)<0 ? [] :  [Math.max(x1, x3), Math.min(y1, y3)];
    l1 = l1.length===0 || l1[0]===l1[1] ? [] : Array(l1[1]-l1[0]).fill().map((_, i) => i+l1[0]);
    l2 = l2.length===0 || l2[0]===l2[1] ? [] : Array(l2[1]-l2[0]).fill().map((_, i) => i+l2[0]);
    l3 = l3.length===0 || l3[0]===l3[1] ? [] : Array(l3[1]-l3[0]).fill().map((_, i) => i+l3[0]);
    
    return [...new Set([...l1, ...l2, ...l3])].length
}