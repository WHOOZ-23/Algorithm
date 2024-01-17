function solution(my_string) {
    let numbers = my_string.split(" ").map((x) => isNaN(x) ? x : +x);
    let result = numbers[0];
  
    numbers.forEach((x, i) => {
      if(x==="+") result += numbers[++i];
      if(x==="-") result -= numbers[++i];
    }) 
  
    return result;
}