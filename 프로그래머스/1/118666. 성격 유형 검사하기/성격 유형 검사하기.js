function solution(survey, choices) {
    const list = {
        R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0,
    };
    let result = "";
    
    for(let i=0; i<survey.length; i++) {
        if(1<=choices[i] && choices[i]<=3) list[survey[i][0]] += 4-choices[i];
        else if(5<=choices[i] && choices[i]<=7) list[survey[i][1]] += choices[i]-4;
        else continue;
    }
    
    if(list["T"] <= list["R"]) result += "R";
    else result += "T";
    
    if(list["F"] <= list["C"]) result += "C";
    else result += "F";
    
    if(list["M"] <= list["J"]) result += "J";
    else result += "M";
    
    if(list["N"] <= list["A"]) result += "A";
    else result += "N";
    
    return result;
}