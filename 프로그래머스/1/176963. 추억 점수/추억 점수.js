function solution(name, yearning, photo) {
    const score = {}
    
    name.map((x, i) => score[x]=yearning[i]);
    
    return photo.map((x) => x.reduce((a, b) => Object.keys(score).includes(b) ? a+score[b] : a, 0));
}