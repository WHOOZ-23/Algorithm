def solution(id_pw, db):
    id, pw = id_pw[0], id_pw[1]
    answer = 0

    for [user_id, user_pw] in db:
        if user_id == id and user_pw == pw:
            return "login"
        elif user_id == id and user_pw != pw:
            answer = 1

    return "wrong pw" if answer == 1 else "fail"