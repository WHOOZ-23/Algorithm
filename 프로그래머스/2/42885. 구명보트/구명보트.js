function solution(people, limit) {
    let cnt = 0;
    let [left, right] = [0, people.length-1];
    
    people.sort((a, b) => a-b);
    
    while(left <= right) {
        if(people[left] + people[right] <= limit) left++;
        right--;
        cnt++;
    }
    
    return cnt;
}