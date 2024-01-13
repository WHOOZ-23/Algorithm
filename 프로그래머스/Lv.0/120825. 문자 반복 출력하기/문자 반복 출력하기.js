function solution(my_string, n) {
  return my_string.split("").reduce((a,b) => [...a, b.repeat(n)], "").join("");
}