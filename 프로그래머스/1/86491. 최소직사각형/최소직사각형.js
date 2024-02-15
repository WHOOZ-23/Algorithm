function solution(sizes) {
    const [width, height] = sizes.reduce(([w, h], [a, b]) => [Math.max(w, Math.min(a, b)), Math.max(h, Math.max(a, b))], [0, 0]);
    return width*height;
}