function solution(clothes) {
    const coordination = {};

    clothes.forEach((cloth) => {
        if (coordination[cloth[1]]) {
            coordination[cloth[1]].push(cloth[0]);
        } else {
            coordination[cloth[1]] = [cloth[0]];
        }
    });

    return (
        Object.keys(coordination)
            .map((x) => coordination[x].length + 1)
            .reduce((a, b) => a * b, 1) - 1
    );
}