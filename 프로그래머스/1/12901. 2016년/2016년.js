function solution(a, b) {
    const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    let days = b;
    
    for(let i=0; i<a-1; i++) {
        days+=monthDays[i];
    }
    
    return week[days%7];
}