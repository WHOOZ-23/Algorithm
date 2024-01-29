function solution(my_string, is_suffix) {
    return +(Array.from(my_string).map((x, i) => my_string.substring(i)).includes(is_suffix))
}