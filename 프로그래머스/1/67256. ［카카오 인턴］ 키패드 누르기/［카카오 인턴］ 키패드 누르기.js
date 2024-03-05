function solution(numbers, hand) {   
    const keypad = [
                [3, 1],
        [0, 0], [0, 1], [0, 2],
        [1, 0], [1, 1], [1, 2],
        [2, 0], [2, 1], [2, 2],
    ];
    
    let result = "";
    let left = [3, 0];
    let right = [3, 2];
    
    numbers.forEach((x) => {
        switch(x) {
            case 1: case 4: case 7:
                result += 'L';
                left = keypad[x];
                break;
            case 3: case 6: case 9:
                result += 'R';
                right = keypad[x];
                break;
            case 2: case 5: case 8: case 0:
                let l = Math.abs(keypad[x][0]-left[0])+Math.abs(keypad[x][1]-left[1]);
                let r = Math.abs(keypad[x][0]-right[0])+Math.abs(keypad[x][1]-right[1]);
                
                if(l<r) {
                    result += 'L';
                    left = keypad[x];
                } else if(l>r) {
                    result += 'R';
                    right = keypad[x];
                } else if(l===r) {
                    if(hand==="left") {
                        result += 'L';
                        left = keypad[x];
                    } else {
                        result += 'R';
                        right = keypad[x];
                    }
                }
                break;
        }
    });
    
    return result;
}