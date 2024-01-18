function solution(id_pw, db) {  
    return db.some((x) => x[0]===id_pw[0]) ? (db.some((x) => x[0]===id_pw[0] && x[1]===id_pw[1]) ? "login" : "wrong pw") : "fail";
}