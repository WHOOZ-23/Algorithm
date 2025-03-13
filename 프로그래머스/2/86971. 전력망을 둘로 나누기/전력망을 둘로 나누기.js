function solution(n, wires) {
    let min = Infinity;

    function tower() {
        let tree = Array.from({ length: n + 1 }, () => []);

        for (const [v1, v2] of wires) {
            tree[v1].push(v2);
            tree[v2].push(v1);
        }

        return tree;
    }

    function count(tree, start, removed) {
        let visited = Array(n + 1).fill(false);
        let queue = [start];
        let cnt = 1;

        visited[start] = true;

        while (0 < queue.length) {
            let node = queue.shift();

            for (const t of tree[node]) {
                if (!visited[t] && !(node === removed[0] && t === removed[1])) {
                    visited[t] = true;
                    queue.push(t);
                    cnt++;
                }
            }
        }

        return cnt;
    }

    for (const [v1, v2] of wires) {
        let tree = tower();
        let a = count(tree, v1, [v1, v2]);
        let b = n - a;

        min = Math.min(min, Math.abs(a - b));
    }

    return min;
}