function solution(numbers, direction) {
    switch(direction) {
        case "right" :
            numbers.unshift(numbers.pop());
            return numbers;
        case "left" :
            numbers.push(numbers.shift());
            return numbers;
    }
}