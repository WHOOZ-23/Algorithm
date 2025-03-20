function solution(arr) {
    let answer = [0, 0];

    function compress(x, y, size) {
        let first = arr[x][y];
        let isSame = true;

        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (arr[i][j] !== first) {
                    isSame = false;
                    break;
                }
            }
        }

        if (isSame) {
            answer[first]++;
            return;
        }

        let newSize = size / 2;

        compress(x, y, newSize);
        compress(x, y + newSize, newSize);
        compress(x + newSize, y, newSize);
        compress(x + newSize, y + newSize, newSize);
    }

    compress(0, 0, arr.length);

    return answer;
}