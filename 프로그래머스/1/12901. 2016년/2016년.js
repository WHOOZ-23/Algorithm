function solution(a, b) {
    const week = {
        0: "SUN",
        1: "MON",
        2: "TUE",
        3: "WED",
        4: "THU",
        5: "FRI",
        6: "SAT"
    }
    
    return week[new Date(`2016-${a}-${b}`).getDay()];
}