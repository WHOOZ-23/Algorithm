function solution(id_pw, db) {
    var result = "fail";
    
    db.map((x)=>{
        if(x[0] == id_pw[0] && x[1] == id_pw[1]) {
            result = "login";
        } else if(x[0] == id_pw[0]) {
            result = "wrong pw";
        }
    })
    
    return result;
}