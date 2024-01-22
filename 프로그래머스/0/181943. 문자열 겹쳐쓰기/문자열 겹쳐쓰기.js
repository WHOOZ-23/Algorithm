function solution(my_string, overwrite_string, s) {
    return my_string.substr(0, s) + overwrite_string + my_string.substr(overwrite_string.length+s);
}