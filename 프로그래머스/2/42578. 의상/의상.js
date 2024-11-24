function solution(clothes) {
    const coordination = {};

    clothes.forEach((cloth) => {
        coordination[cloth[1]]
            ? coordination[cloth[1]].push(cloth[0])
            : (coordination[cloth[1]] = [cloth[0]]);
    });

    return (
        Object.values(coordination)
            .map((cloth) => cloth.length + 1)
            .reduce((a, b) => a * b, 1) - 1
    );
}