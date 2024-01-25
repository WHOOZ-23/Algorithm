function solution(num_list) {
    const num1 = num_list.length-1;
    const num2 = num_list.length-2;
    num_list.push(num_list[num2] < num_list[num1] ? num_list[num1]-num_list[num2] : num_list[num1]*2)
    return num_list;
}