function solution(id_list, report, k) {
    const obj1 = {};
    const obj2 = {};
    
    id_list.forEach((x) => {
        obj1[x] = [];
        obj2[x] = 0;
    });
    
    report = new Set(report);
    
    report.forEach((x) => {
       x = x.split(" ");
        
        obj1[x[1]].push(x[0]);
    });
    
    id_list.forEach((x) => {
        if(k <= obj1[x].length) {
            obj1[x].forEach((y) => obj2[y]++);
        }
    })
    
    return Object.values(obj2);
}