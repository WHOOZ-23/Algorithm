function solution(numbers, direction) {
    let temp;
    
    switch(direction) {
        case "right" :
            temp = numbers.pop();
            numbers.unshift(temp);
            return numbers;
        case "left" :
            temp = numbers.shift();
            numbers.push(temp);
            return numbers;
    }
}