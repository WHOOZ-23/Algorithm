function solution(clothes) {
    const coordination = {};

    clothes.forEach((cloth) => {
        coordination[cloth[1]] = (coordination[cloth[1]] || 1) + 1;
    });

    return Object.values(coordination).reduce((a, b) => a * b, 1) - 1;
}